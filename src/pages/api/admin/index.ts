import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../libs/prisma';
import { Route } from '@prisma/client';

type Data = { message: string } | Route;

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>): void | Promise<void> {
	switch (req.method) {
		case 'POST':
			return createRoute(req, res);
		default:
			return res.status(400).json({ message: 'Bad request' });
	}
}

const createRoute = async (req: NextApiRequest, res: NextApiResponse<Data>): Promise<void> => {
	try {
		const data = await prisma.route.create({
			data: { ...req.body }
		});
		res.status(200).json(data);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: 'Something was wrong (check logs)' });
	}
};
