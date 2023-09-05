import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../app/libs/prisma';
import { Schedule } from '@prisma/client';

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
	try {
		const data = await prisma.schedule.findMany({
			where: {
				route: {
					startCity: {
						name: 'Riobamba'
					},
					endCity: {
						name: 'Quito'
					}
				}
			},
			include: {
				route: {
					include: {
						startCity: {
							select: {
								name: true
							}
						},
						endCity: {
							select: {
								name: true
							}
						},
						transportationProvider: {
							select: {
								name: true
							}
						}
					}
				}
			}
		});
		res.status(200).json(data);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: 'Something was wrong (check logs)' });
	}
};
