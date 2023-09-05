import React from 'react';
import { Search } from './components/Search';
import getCities from './actions/cities';

export default async function Home() {
	const cities = await getCities();
	/* if (listings.length === 0) return <EmptyState showReset />; */

	return <Search cities={cities} />;
}
