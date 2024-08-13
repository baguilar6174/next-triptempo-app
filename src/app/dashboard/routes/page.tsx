import React from 'react';

import { Text } from '@/components/Text';
import { PageTable } from './components/PageTable';

export default function RoutesPage(): JSX.Element {
	return (
		<React.Fragment>
			<div className="flex justify-between items-center">
				<Text tag="h2">Routes</Text>
			</div>
			<PageTable />
		</React.Fragment>
	);
}
