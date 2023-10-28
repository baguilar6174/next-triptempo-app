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
import { Alert } from './Alert';

interface SearchProps {
	cities: CitiesSelectValue[];
}

export const SearchClient: React.FC<SearchProps> = (props: SearchProps) => {
	const { cities } = props;

	const { isLoading, fetchSchedules, schedules } = useSchedulesStore();

	const [startCity, setStartCity] = React.useState<CitiesSelectValue>();
	const [endCity, setEndCity] = React.useState<CitiesSelectValue>();
	const [showAlert, setShowAlert] = React.useState<boolean>(false);

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
					options={cities.filter((city): boolean => city.value != endCity?.value)}
					placeholder="Where from?"
					value={startCity}
					onChange={(value): void => setStartCity(value as CitiesSelectValue)}
					formatOptionLabel={formatOptionLabel}
				/>
				<CustomSelect
					options={cities.filter((city): boolean => city.value != startCity?.value)}
					placeholder="Where to?"
					value={endCity}
					onChange={(value): void => setEndCity(value as CitiesSelectValue)}
					formatOptionLabel={formatOptionLabel}
				/>
				<Button label="Search Schedules" onClick={onSubmit} />
			</div>
			{/* results */}
			{isLoading && <Loader />}
			{schedules.length === 0 && <EmptyState />}
			{showAlert && (
				<Alert
					title="You must indicate the city of origin and destination"
					kind="ERROR"
					handleClose={() => setShowAlert(false)}
				/>
			)}
			{schedules.length !== 0 && (
				<React.Fragment>
					<div className="pt-10">
						<p className="text-light">
							We&apos;ve found <span className="text-darkNavy">{schedules.length}</span> results
						</p>
					</div>
					{schedules.map((schedule) => (
						<ResultCard key={schedule.id} schedule={schedule} />
					))}
				</React.Fragment>
			)}
		</Container>
	);

	async function onSubmit(): Promise<void> {
		if (!startCity || !endCity) {
			setShowAlert(true);
			return;
		}
		fetchSchedules(startCity.value, endCity.value);
	}
};
