import React from 'react';

import { SearchClient } from '../components/SearchClient';
import { type City, type CitiesSelectValue } from '../types';
import { CitiesService } from '../services/cities.service';

export default async function Home(): Promise<JSX.Element> {
	const cities = await getCities();
	return <SearchClient cities={cities} />;
}

async function getCities(): Promise<CitiesSelectValue[]> {
	const { data } = await CitiesService.getCitites();
	return data.map((city: City): CitiesSelectValue => {
		return {
			value: city.id,
			label: city.name,
			province: city.province,
			region: city.region
		};
	});
}
