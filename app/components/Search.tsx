'use client';

import React from 'react';
import { Container } from './Container';
import { Heading } from './Heading';
import { Button } from './Button';
import { SelectValue, CustomSelect } from './Inputs/Select';
import { ResultCard } from './ResultCard';
import axios from 'axios';
import { Schedule } from '../interfaces/schedule';

interface SearchProps {
	cities: SelectValue[];
}

export const Search: React.FC<SearchProps> = (props: SearchProps) => {
	const { cities } = props;

	const [startCity, setStartCity] = React.useState<SelectValue>();
	const [endCity, setEndCity] = React.useState<SelectValue>();
	const [schedules, setSchedules] = React.useState<Schedule[]>();

	return (
		<Container>
			<Heading title="Where do you wanna go?" subtitle="Find the perfect location!" />
			<div className="pt-24 grid grid-cols-1 lg:grid-cols-3 gap-8">
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
			{schedules && (
				<>
					<div className="pt-10">
						<p className="text-neutral-500">
							We&apos;ve found <span className="text-rose-500">523</span> results
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
		const { data } = await axios.get('/api/cities', {
			params: {
				startCityId: startCity.value,
				endCityId: endCity.value
			}
		});
		setSchedules(data);
	}
};
