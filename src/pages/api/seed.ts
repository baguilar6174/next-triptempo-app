import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../libs/prisma';
import { cities, provinces, regions, routes, schedules, transportationProviders } from '../../data/seed';

type ResponseData = { message: string };

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
	switch (req.method) {
		case 'POST':
			return createSeed(res);
		default:
			return res.status(400).json({ message: 'Bad request' });
	}
}

const createSeed = async (res: NextApiResponse<ResponseData>): Promise<void> => {
	try {
		await prisma.schedule.deleteMany();
		await prisma.route.deleteMany();
		await prisma.transportationProvider.deleteMany();

		await prisma.city.deleteMany();
		await prisma.province.deleteMany();
		await prisma.region.deleteMany();

		await prisma.region.createMany({ data: regions });
		await prisma.province.createMany({ data: provinces });
		await prisma.city.createMany({ data: cities });
		await prisma.transportationProvider.createMany({ data: transportationProviders });
		await prisma.route.createMany({ data: routes });
		await prisma.schedule.createMany({ data: schedules });

		return res.status(200).json({ message: 'Data created!' });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: 'Something was wrong (check logs)' });
	}
};
