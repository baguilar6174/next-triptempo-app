'use client';

import React from 'react';
import { Modal } from './Modal';
import { useSearchModalStore } from '../../store/searchModalStore';
import { Heading } from '../Heading';
import { Counter } from '../Inputs/Counter';
import { useRouter, useSearchParams } from 'next/navigation';
import qs from 'query-string';

const STEPS = {
	LOCATION: 0,
	DATE: 1,
	INFO: 2
};

export const SearchModal = () => {
	const router = useRouter();
	const searchModalStore = useSearchModalStore();
	const params = useSearchParams();

	const [step, setStep] = React.useState(STEPS.LOCATION);
	/* const [location, setLocation] = React.useState<SelectValue>(); */
	const [guestCount, setGuestCount] = React.useState(1);
	const [roomCount, setRoomCount] = React.useState(1);
	const [bathroomCount, setBathroomCount] = React.useState(1);

	const onBack = React.useCallback(() => {
		setStep((value) => value - 1);
	}, []);

	const onNext = React.useCallback(() => {
		setStep((value) => value + 1);
	}, []);

	const actionLabel = React.useMemo(() => {
		if (step === STEPS.INFO) return 'Search';
		return 'Next';
	}, [step]);

	const onSubmit = React.useCallback(async () => {
		if (step !== STEPS.INFO) return onNext();
		let currentQuery = {};
		if (params) currentQuery = qs.parse(params.toString());

		const updatedQuery: any = {
			...currentQuery,
			guestCount,
			roomCount,
			bathroomCount
		};

		const url = qs.stringifyUrl(
			{
				url: '/',
				query: updatedQuery
			},
			{ skipNull: true }
		);

		setStep(STEPS.LOCATION);
		searchModalStore.onClose();
		router.push(url);
	}, [step, onNext, params, guestCount, roomCount, bathroomCount, searchModalStore, router]);

	const secondaryActionLabel = React.useMemo(() => {
		if (step === STEPS.LOCATION) {
			return undefined;
		}

		return 'Back';
	}, [step]);

	let bodyContent = (
		<div className="flex flex-col gap-8">
			<Heading title="Where do you wanna go?" subtitle="Find the perfect location!" />
			{/* <CustomSelect value={location} onChange={(value) => setLocation(value as SelectValue)} /> */}
		</div>
	);

	if (step === STEPS.DATE) {
		bodyContent = (
			<div className="flex flex-col gap-8">
				<Heading title="When do you plan to go?" subtitle="Make sure everyone is free!" />
			</div>
		);
	}

	if (step === STEPS.INFO) {
		bodyContent = (
			<div className="flex flex-col gap-8">
				<Heading title="More information" subtitle="Find your perfect place!" />
				<Counter
					onChange={(value) => setGuestCount(value)}
					value={guestCount}
					title="Guests"
					subtitle="How many guests are coming?"
				/>
				<hr />
				<Counter
					onChange={(value) => setRoomCount(value)}
					value={roomCount}
					title="Rooms"
					subtitle="How many rooms do you need?"
				/>
				<hr />
				<Counter
					onChange={(value) => {
						setBathroomCount(value);
					}}
					value={bathroomCount}
					title="Bathrooms"
					subtitle="How many bahtrooms do you need?"
				/>
			</div>
		);
	}

	return (
		<Modal
			isOpen={searchModalStore.isOpen}
			title="Filters"
			actionLabel={actionLabel}
			onSubmit={onSubmit}
			secondaryActionLabel={secondaryActionLabel}
			secondaryAction={step === STEPS.LOCATION ? undefined : onBack}
			onClose={searchModalStore.onClose}
			body={bodyContent}
		/>
	);
};
