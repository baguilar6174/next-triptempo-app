import React from 'react';

import { SearchClient } from '@/components/SearchClient';
import { CitiesService } from '../services/cities.service';

export default async function Home(): Promise<JSX.Element> {
	const { data } = await CitiesService.getCitites();
	return <SearchClient cities={data} />;
}
