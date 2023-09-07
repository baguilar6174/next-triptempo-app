'use client';

import React from 'react';
import { Container } from './Container';
import { Heading } from './Heading';
import { Button } from './Button';
import { SelectValue, CustomSelect } from './Inputs/Select';
import { useSchedulesStore } from '../store';
import { ResultCard } from './ResultCard';
import { Loader } from './Loader';
import EmptyState from './EmptyState';

interface SearchProps {
	cities: SelectValue[];
}

export const Search: React.FC<SearchProps> = (props: SearchProps) => {
	const { cities } = props;

	const { isLoading, fetchSchedules, schedules } = useSchedulesStore();

	const [startCity, setStartCity] = React.useState<SelectValue>();
	const [endCity, setEndCity] = React.useState<SelectValue>();

	return (
		<Container>
			<Heading title="Where do you wanna go?" subtitle="Find the perfect schedule for your trip!" />
			<div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-8">
				<CustomSelect
					options={cities.filter((city) => city.value != endCity?.value)}
					placeholder="Where from?"
					value={startCity}
					onChange={(value) => setStartCity(value as SelectValue)}
				/>
				<CustomSelect
					options={cities.filter((city) => city.value != startCity?.value)}
					placeholder="Where to?"
					value={endCity}
					onChange={(value) => setEndCity(value as SelectValue)}
				/>
				<Button label="Search" onClick={onSubmit} />
			</div>
			{/* results */}
			{isLoading && <Loader />}
			{schedules.length === 0 && <EmptyState />}
			{schedules.length !== 0 && (
				<>
					<div className="pt-10">
						<p className="text-neutral-500">
							We&apos;ve found <span className="text-rose-500">{schedules.length}</span> results
						</p>
					</div>
					{schedules.map((schedule) => (
						<ResultCard key={schedule.id} schedule={schedule} />
					))}
				</>
			)}
		</Container>
	);

	async function onSubmit() {
		if (!startCity || !endCity) return;
		fetchSchedules(startCity.value, endCity.value);
		/*const { data } = await axios.get('/api/cities', {
			params: {
				startCityId: startCity.value,
				endCityId: endCity.value
			}
		});
		setSchedules(data); */
	}
};
