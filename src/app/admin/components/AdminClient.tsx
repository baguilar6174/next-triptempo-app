'use client';

import React from 'react';
import { Container } from '../../../components/Container';
import { Heading } from '../../../components/Heading';
import { CustomSelect, SelectValueBase } from '../../../components/Inputs/Select';
import { Button } from '../../../components/Button';
import { CitiesSelectValue } from '../../../types';
import { Input } from '../../../components/Inputs/Input';
import { FieldValues, useForm } from 'react-hook-form';

interface AdminClientProps {
	providers: SelectValueBase[];
	cities: CitiesSelectValue[];
}

export const AdminClient: React.FC<AdminClientProps> = (props: AdminClientProps) => {
	const { providers, cities } = props;

	const [provider, setProvider] = React.useState<SelectValueBase>();
	const [startCity, setStartCity] = React.useState<CitiesSelectValue>();
	const [endCity, setEndCity] = React.useState<CitiesSelectValue>();

	const {
		register,
		formState: { errors }
	} = useForm<FieldValues>({
		defaultValues: {
			distance: 0,
			estimatedTravelTime: 0,
			price: 0
		}
	});

	const formatOptionLabel = (option: CitiesSelectValue) => (
		<div className="flex flex-row items-center gap-3">
			<div>
				{option.label},<span className="text-neutral-500 ml-1">{option.province}</span>
			</div>
		</div>
	);

	return (
		<Container>
			<Heading title="Create Routes" subtitle="Here you can create routes" />
			<div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-8">
				<CustomSelect
					options={providers}
					placeholder="Provider"
					value={provider}
					onChange={(value) => setProvider(value as SelectValueBase)}
				/>
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
				<Input id="distance" label="Distance" formatPrice type="number" register={register} errors={errors} required />
				<Input
					id="estimatedTravelTime"
					label="Estimated travel time"
					formatPrice
					type="number"
					register={register}
					errors={errors}
					required
				/>
				<Input id="price" label="Price" formatPrice type="number" register={register} errors={errors} required />
				<Input id="df" label="dffsd" register={register} errors={errors} required />
				<Button label="Save" onClick={onSubmit} />
			</div>
		</Container>
	);

	function onSubmit() {
		console.log(provider);
	}
};
