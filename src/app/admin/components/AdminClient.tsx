'use client';

import React from 'react';
import { Container } from '../../../components/Container';
import { Heading } from '../../../components/Heading';
import { CustomSelect, SelectValueBase } from '../../../components/Inputs/Select';
import { Button } from '../../../components/Button';
import { CitiesSelectValue } from '../../../types';
import { Input } from '../../../components/Inputs/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { GiPathDistance } from 'react-icons/gi';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { useAdminStore } from '../../../store';
import { Loader } from '../../../components/Loader';

interface AdminClientProps {
	providers: SelectValueBase[];
	cities: CitiesSelectValue[];
}

type FormValues = {
	distance: number;
	estimatedTravelTime: number;
	price: number;
	transportationProvider: SelectValueBase;
	startCity: CitiesSelectValue;
	endCity: CitiesSelectValue;
};

export const AdminClient: React.FC<AdminClientProps> = (props: AdminClientProps) => {
	const { providers, cities } = props;

	const { createRoute, isLoading, error } = useAdminStore();

	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors }
	} = useForm<FormValues>({
		defaultValues: {
			distance: undefined,
			estimatedTravelTime: undefined,
			price: undefined,
			transportationProvider: undefined,
			startCity: undefined,
			endCity: undefined
		}
	});

	const transportationProvider = watch('transportationProvider');
	const startCity = watch('startCity');
	const endCity = watch('endCity');

	const setCustomValue = (id: any, value: any) => {
		setValue(id, value, {
			shouldDirty: true,
			shouldTouch: true,
			shouldValidate: true
		});
	};

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		createRoute({
			...data,
			distance: Number(data.distance),
			price: Number(data.price),
			estimatedTravelTime: Number(data.estimatedTravelTime)
		});
	};

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
			<div className="mt-5 grid grid-cols-1 lg:grid-cols-4 gap-8">
				<CustomSelect
					options={providers}
					placeholder="Provider"
					value={transportationProvider}
					onChange={(value) => setCustomValue('transportationProvider', value)}
				/>
				<CustomSelect
					options={cities.filter((city) => city.value != endCity?.value)}
					placeholder="Where from?"
					value={startCity}
					onChange={(value) => setCustomValue('startCity', value)}
					formatOptionLabel={formatOptionLabel}
				/>
				<CustomSelect
					options={cities.filter((city) => city.value != startCity?.value)}
					placeholder="Where to?"
					value={endCity}
					onChange={(value) => setCustomValue('endCity', value)}
					formatOptionLabel={formatOptionLabel}
				/>
				<Input
					id="distance"
					label="Distance"
					icon={GiPathDistance}
					type="number"
					register={register}
					errors={errors}
					required
				/>
				<Input
					id="estimatedTravelTime"
					label="Estimated travel time"
					icon={AiOutlineFieldTime}
					type="number"
					register={register}
					errors={errors}
					required
				/>
				<Input
					id="price"
					label="Price"
					icon={RiMoneyDollarCircleFill}
					type="number"
					register={register}
					errors={errors}
					required
				/>
				<Button label="Save" onClick={handleSubmit(onSubmit)} />
			</div>
			{/* results */}
			{isLoading && <Loader />}
			{error && <p> {error.data.message} </p>}
		</Container>
	);
};
