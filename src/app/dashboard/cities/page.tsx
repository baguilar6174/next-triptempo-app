import React from 'react';

import { PageHeader } from './components/PageHeader';
import { ProvincesService } from '@/services/provinces.service';
import { DataTable } from '@/components/DataTable';
import { columns } from './components/Columns';
import { CitiesService } from '@/services/cities.service';

export default async function CitiesPage(): Promise<JSX.Element> {
	const { result: provinces } = await ProvincesService.getProvinces();
	const { result: cities } = await CitiesService.getCitites();

	return (
		<div>
			<PageHeader provinces={provinces} />
			<DataTable columns={columns} data={cities} />
		</div>
	);
}
