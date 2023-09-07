import React from 'react';

import { Search } from '../components/SearchClient';
import getCities from '../actions/cities';

export default async function Home() {
	const cities = await getCities();

	return (
		<React.Fragment>
			<Search cities={cities} />
		</React.Fragment>
	);
}
