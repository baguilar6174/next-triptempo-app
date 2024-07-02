import React from 'react';
import { Text } from '@/components/Text';
import { DashboardForm } from './components/dashboardForm';

export default function DashboardPage(): JSX.Element {
	return (
		<div>
			<Text tag="h1">Trip Tempo Dashboard</Text>
			<DashboardForm />
		</div>
	);
}
