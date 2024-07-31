import React from 'react';

import { Text } from '@/components/Text';

import { UsersRound } from 'lucide-react';
import { CardSummary } from './components/CardSummary';

export default function DashboardPage(): JSX.Element {
	return (
		<div>
			<Text tag="h2" className="mb-4">
				Dashboard
			</Text>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
				<CardSummary
					icon={UsersRound}
					total="12.450"
					average={15}
					title="Available cities"
					tooltipText="See all available cities"
				/>
				<CardSummary
					icon={UsersRound}
					total="12.450"
					average={21}
					title="Available cities"
					tooltipText="See all available cities"
				/>
				<CardSummary
					icon={UsersRound}
					total="12.450"
					average={80}
					title="Available cities"
					tooltipText="See all available cities"
				/>
			</div>
		</div>
	);
}
