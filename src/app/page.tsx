import React from 'react';

import { SearchClient } from '../components/SearchClient';
import axios from 'axios';
import { CitiesSelectValue } from '../types';

const URL = 'https://triptempo-server.up.railway.app/api/v1/cities';
// const URL = 'http://localhost:3001/api/v1/cities';

export default async function Home() {
	const cities = await getCities();
	return <SearchClient cities={cities} />;
}

async function getCities() {
	const response = await axios.get(URL);
	const { data } = response;
	return data.data.result.map((city: any): CitiesSelectValue => {
		return {
			value: city.id,
			label: city.name,
			province: city.province,
			region: city.region
		};
	});
}
