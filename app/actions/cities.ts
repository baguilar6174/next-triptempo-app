import prisma from '../libs/prisma';

export default async function getCities() {
	try {
		const cities = await prisma.city.findMany({
			include: {
				province: {
					include: {
						region: true
					}
				}
			}
		});
		return cities.map((city) => {
			return {
				value: city.id,
				label: city.name,
				province: city.province.name,
				region: city.province.region.name
			};
		});
	} catch (error: any) {
		throw new Error(error);
	}
}
