import { SelectValueBase } from '../components/Inputs/Select';
import prisma from '../libs/prisma';

export default async function getTransportProviders(): Promise<SelectValueBase[]> {
	try {
		const data = await prisma.transportationProvider.findMany();
		return data.map((provider): SelectValueBase => {
			return {
				value: provider.id,
				label: provider.name
			};
		});
	} catch (error: any) {
		throw new Error(error);
	}
}
