import React from 'react';

import { PageHeader } from './components/PageHeader';
import { List } from './components/List';

export default function CitiesPage(): JSX.Element {
	return (
		<div>
			<PageHeader />
			<List />
		</div>
	);
}
