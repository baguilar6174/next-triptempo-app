'use client';

import React from 'react';
import { Container } from './Container';
import { Heading } from './Heading';
import { Button } from './Button';
import { SelectValue, CustomSelect } from './Inputs/Select';

interface SearchProps {
	cities: SelectValue[];
}

export const Search: React.FC<SearchProps> = (props: SearchProps) => {
	const { cities } = props;

	const [startCity, setStartCity] = React.useState<SelectValue>();
	const [endCity, setEndCity] = React.useState<SelectValue>();

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
		</Container>
	);

	function onSubmit() {
		console.log({ startCity, endCity });
	}
};
