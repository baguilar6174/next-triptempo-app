'use client';

import React from 'react';
import { Container } from './Container';
import { Heading } from './Heading';
import { Button } from './Button';
import { CustomSelect } from './Inputs/Select';
import { useSchedulesStore } from '../store';
import { ResultCard } from './ResultCard';
import { Loader } from './Loader';
import EmptyState from './EmptyState';
import { CitiesSelectValue } from '../types';

interface SearchProps {
	cities: CitiesSelectValue[];
}

export const Search: React.FC<SearchProps> = (props: SearchProps) => {
	const { cities } = props;

	const { isLoading, fetchSchedules, schedules } = useSchedulesStore();

	const [startCity, setStartCity] = React.useState<CitiesSelectValue>();
	const [endCity, setEndCity] = React.useState<CitiesSelectValue>();

	const formatOptionLabel = (option: CitiesSelectValue) => (
		<div className="flex flex-row items-center gap-3">
			<div className="text-light">
				{option.label}, <span>{option.province}</span>
			</div>
		</div>
	);

	return (
		<Container>
			<Heading title="Where do you wanna go?" subtitle="Find the perfect schedule for your trip!" />
			<div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-8">
				<CustomSelect
					options={cities.filter((city) => city.value != endCity?.value)}
					placeholder="Where from?"
					value={startCity}
					onChange={(value) => setStartCity(value as CitiesSelectValue)}
					formatOptionLabel={formatOptionLabel}
				/>
				<CustomSelect
					options={cities.filter((city) => city.value != startCity?.value)}
					placeholder="Where to?"
					value={endCity}
					onChange={(value) => setEndCity(value as CitiesSelectValue)}
					formatOptionLabel={formatOptionLabel}
				/>
				<Button label="Search Schedules" onClick={onSubmit} />
			</div>
			{/* results */}
			{isLoading && <Loader />}
			{schedules.length === 0 && <EmptyState />}
			{schedules.length !== 0 && (
				<>
					<div className="pt-10">
						<p className="text-light">
							We&apos;ve found <span className="text-darkNavy">{schedules.length}</span> results
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
	}
};
