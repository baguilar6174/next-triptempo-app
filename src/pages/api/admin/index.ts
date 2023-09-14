import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../libs/prisma';
import { Route } from '@prisma/client';
import { SelectValueBase } from '../../../components/Inputs/Select';
import { CitiesSelectValue } from '../../../types';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

export interface HelloApiRequest extends NextApiRequest {
	body: {
		distance: number;
		estimatedTravelTime: number;
		price: number;
		transportationProvider: SelectValueBase;
		startCity: CitiesSelectValue;
		endCity: CitiesSelectValue;
	};
}

type Data = { message: string } | Route;

export default function handler(req: HelloApiRequest, res: NextApiResponse<Data>): void | Promise<void> {
	switch (req.method) {
		case 'POST':
			return createRoute(req, res);
		default:
			return res.status(400).json({ message: 'Bad request' });
	}
}

const createRoute = async (req: HelloApiRequest, res: NextApiResponse<Data>): Promise<void> => {
	const { distance, estimatedTravelTime, price, transportationProvider, startCity, endCity } = req.body;

	try {
		const route = await prisma.route.create({
			data: {
				distance,
				estimatedTravelTime,
				price,
				transportationProviderId: transportationProvider.value,
				endCityId: endCity.value,
				startCityId: startCity.value
			}
		});
		res.status(200).json(route);
	} catch (error) {
		if (error instanceof PrismaClientKnownRequestError) {
			if (error.code === 'P2002') {
				return res.status(400).json({ message: 'There is a unique constraint violation' });
			}
		}
		return res.status(500).json({ message: 'Something was wrong (check logs)' });
	}
};
