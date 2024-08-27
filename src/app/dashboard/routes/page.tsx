import React from 'react';

import { PageTable } from './components/PageTable';
import { PageHeader } from './components/PageHeader';
import { CitiesService } from '@/services/cities.service';

export default async function RoutesPage(): Promise<JSX.Element> {
	const { result: cities } = await CitiesService.getAll();

	return (
		<div>
			<PageHeader cities={cities} />
			<PageTable />
		</div>
	);
}
