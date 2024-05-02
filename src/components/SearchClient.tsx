/* eslint-disable @typescript-eslint/no-misused-promises */
'use client';

import React from 'react';
import { Container } from './Container';
import { Heading } from './Heading';
import { Button } from './Button';
import { CustomSelect } from './Inputs/Select';
import { useSchedulesStore } from '../stores';
import { ResultCard } from './ResultCard';
import { Loader } from './Loader';
import { type CitiesSelectValue } from '../types';
import { Alert } from './Alert';
import { ZERO } from '../constants';

interface SearchProps {
	cities: CitiesSelectValue[];
}

export const SearchClient: React.FC<SearchProps> = (props: SearchProps) => {
	const { cities } = props;

	const isLoading = useSchedulesStore((state) => state.isLoading);
	const schedules = useSchedulesStore((state) => state.schedules);
	const fetchSchedules = useSchedulesStore((state) => state.fetchSchedules);

	const [startCity, setStartCity] = React.useState<CitiesSelectValue>();
	const [endCity, setEndCity] = React.useState<CitiesSelectValue>();
	const [showAlert, setShowAlert] = React.useState<boolean>(false);

	const formatOptionLabel = (option: CitiesSelectValue): JSX.Element => (
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
					options={cities.filter((city): boolean => city.value !== endCity?.value)}
					placeholder="Where from?"
					value={startCity}
					onChange={(value): void => {
						setStartCity(value as CitiesSelectValue);
					}}
					formatOptionLabel={formatOptionLabel}
				/>
				<CustomSelect
					options={cities.filter((city): boolean => city.value !== startCity?.value)}
					placeholder="Where to?"
					value={endCity}
					onChange={(value): void => {
						setEndCity(value as CitiesSelectValue);
					}}
					formatOptionLabel={formatOptionLabel}
				/>
				<Button label="Search Schedules" onClick={onSubmit} />
			</div>
			{isLoading && <Loader />}
			{schedules.length === ZERO && (
				<div className="py-20 flex flex-col gap-2 justify-center items-center">
					<Heading center title={'No results to show'} subtitle={'Try changing your search.'} />
				</div>
			)}
			{showAlert && (
				<Alert
					title="You must indicate the city of origin and destination"
					handleClose={() => {
						setShowAlert(false);
					}}
				/>
			)}
			{schedules.length !== ZERO && (
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
		await fetchSchedules(String(startCity.value), String(endCity.value));
	}
};
