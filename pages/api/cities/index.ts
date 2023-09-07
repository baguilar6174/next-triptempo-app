import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../app/libs/prisma';
import { Schedule } from '../../../app/interfaces/schedule';

type Data = { message: string } | Schedule[];

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>): void | Promise<void> {
	switch (req.method) {
		case 'GET':
			return getAll(req, res);
		default:
			return res.status(400).json({ message: 'Bad request' });
	}
}

const getAll = async (req: NextApiRequest, res: NextApiResponse<Data>): Promise<void> => {
	const { startCityId, endCityId } = req.query;

	try {
		const data = await prisma.transportationProvider.findMany({
			where: {
				routes: {
					some: {
						startCityId: Number(startCityId),
						endCityId: Number(endCityId)
					}
				}
			},
			select: {
				id: true,
				name: true,
				routes: {
					select: {
						schedules: {
							select: {
								departureTime: true
							}
						},
						estimatedTravelTime: true,
						distance: true,
						price: true
					}
				}
			}
		});
		const format = data.map(({ id, name, routes }): Schedule => {
			const { distance, estimatedTravelTime, price, schedules } = routes[0];
			return {
				id,
				transportationProvider: name,
				estimatedTravelTime,
				distance,
				price,
				schedules: schedules.map((item) => item.departureTime)
			};
		});
		res.status(200).json(format);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: 'Something was wrong (check logs)' });
	}
};
