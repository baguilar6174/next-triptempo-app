import type { NextApiRequest, NextApiResponse } from 'next';
import { Schedule } from '../../../interfaces/schedule';
import prisma from '../../../libs/prisma';

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
						startCityId: startCityId as string,
						endCityId: endCityId as string
					}
				}
			},
			select: {
				id: true,
				name: true,
				logo: true,
				details: true,
				routes: {
					where: {
						startCityId: startCityId as string,
						endCityId: endCityId as string
					},
					select: {
						schedules: true,
						estimatedTravelTime: true,
						distance: true,
						price: true
					}
				}
			}
		});
		const format = data.map(({ id, name, logo, routes, details }): Schedule => {
			const { distance, estimatedTravelTime, price, schedules } = routes[0];
			return {
				id,
				transportationProvider: name,
				transportationProviderLogo: logo,
				transportationProviderDetails: details,
				estimatedTravelTime,
				distance,
				price,
				schedules
			};
		});
		res.status(200).json(format);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: 'Something was wrong (check logs)' });
	}
};
