import React from 'react';

import { SearchClient } from '../components/SearchClient';
import axios from 'axios';
import { type CitiesSelectValue } from '../types';

const URL = 'https://triptempo-server.up.railway.app/api/v1/cities';
// const URL = 'http://localhost:3001/api/v1/cities';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default async function Home() {
	const cities = await getCities();
	return <SearchClient cities={cities} />;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getCities(): Promise<any> {
	const response = await axios.get(URL);
	const { data } = response;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return data.data.result.map((city: any): CitiesSelectValue => {
		return {
			value: city.id,
			label: city.name,
			province: city.province,
			region: city.region
		};
	});
}
