import prisma from '../libs/prisma';

export default async function getSchedules(startCityId: number, endCityId: number) {
	try {
		const data = await prisma.schedule.findMany({
			where: {
				route: {
					startCityId,
					endCityId
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
		return data;
	} catch (error: any) {
		throw new Error(error);
	}
}
