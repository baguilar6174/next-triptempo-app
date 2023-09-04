import prisma from '../libs/prisma';

export default async function getCities() {
	try {
		const data = await prisma.city.findMany();
		return data;
	} catch (error: any) {
		throw new Error(error);
	}
}
