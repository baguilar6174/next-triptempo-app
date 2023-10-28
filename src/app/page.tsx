import React from 'react';

import { SearchClient } from '../components/SearchClient';
import getCities from '../actions/cities';

export default async function Home() {
	const cities = await getCities();

	return <SearchClient cities={cities} />;
}
