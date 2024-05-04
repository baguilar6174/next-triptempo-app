/* eslint-disable @typescript-eslint/no-misused-promises */
'use client';

import React from 'react';
import { Container } from './Container';
import { Button } from './ui/button';
import { CustomSelect } from './Inputs/Select';
import { useSchedulesStore } from '../stores';
import { ResultCard } from './ResultCard';
import { Loader } from './Loader';
import { type CitiesSelectValue } from '../types';
import { Alert, AlertDescription } from './ui/alert';
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
			<h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight">Where do you wanna go?</h1>
			<h3 className="scroll-m-20 text-md font-semibold tracking-tight">Find the perfect schedule for your trip!</h3>
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
				<Button onClick={onSubmit} variant="outline" size="lg" className="hover:bg-accent hover:text-accent-foreground">
					Search Schedules
				</Button>
			</div>
			{isLoading && <Loader />}
			{schedules.length === ZERO && (
				<div className="py-20 flex flex-col gap-2 justify-center items-center">
					<h4 className="scroll-m-20 text-xl font-semibold tracking-tight">No results to show</h4>
					<p className="leading-7 [&:not(:first-child)]:mt-6">Try changing your search.</p>
				</div>
			)}
			{showAlert && (
				<Alert
					variant="destructive"
					onClick={() => {
						// TODO: add in close button
						setShowAlert(false);
					}}
				>
					<AlertDescription>You must indicate the city of origin and destination</AlertDescription>
				</Alert>
			)}
			{schedules.length !== ZERO && (
				<React.Fragment>
					<div className="pt-10">
						<p className="text-light">
							We&apos;ve found <span className="">{schedules.length}</span> results
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
