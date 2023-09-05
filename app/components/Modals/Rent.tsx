'use client';

import React from 'react';
import { useRentModalStore } from '../../store';
import { Modal } from './Modal';
import { Heading } from '../Heading';
import { Input } from '../Inputs/Input';
import { categories } from '../Navbar/Categories';
import { CategoryInput } from '../Inputs/CategoryInput';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Counter } from '../Inputs/Counter';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const STEPS = {
	CATEGORY: 0,
	LOCATION: 1,
	INFO: 2,
	IMAGES: 3,
	DESCRIPTION: 4,
	PRICE: 5
};

export const RentModal = () => {
	const router = useRouter();
	const rentModalStore = useRentModalStore();

	const [step, setStep] = React.useState<number>(STEPS.CATEGORY);
	const [isLoading, setIsLoading] = React.useState<boolean>(false);

	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
		reset
	} = useForm<FieldValues>({
		defaultValues: {
			category: '',
			location: null,
			guestCount: 1,
			roomCount: 1,
			bathroomCount: 1,
			price: 1,
			title: '',
			description: ''
		}
	});

	const category = watch('category');
	const guestCount = watch('guestCount');
	const roomCount = watch('roomCount');
	const bathroomCount = watch('bathroomCount');

	const setCustomValue = (id: string, value: any) => {
		setValue(id, value, {
			shouldDirty: true,
			shouldTouch: true,
			shouldValidate: true
		});
	};

	const onBack = () => {
		setStep((value) => value - 1);
	};

	const onNext = () => {
		setStep((value) => value + 1);
	};

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		if (step !== STEPS.PRICE) return onNext();
		setIsLoading(true);
		console.log(data);
		toast.success('Listing created!');
		router.refresh();
		reset();
		setStep(STEPS.CATEGORY);
		rentModalStore.onClose();
		setIsLoading(false);
	};

	const actionLabel = React.useMemo(() => {
		if (step === STEPS.PRICE) return 'Create';
		return 'Next';
	}, [step]);

	const secondaryActionLabel = React.useMemo(() => {
		if (step === STEPS.CATEGORY) return undefined;
		return 'Back';
	}, [step]);

	let bodyContent = (
		<div className="flex flex-col gap-8">
			<Heading title="Which of these best describes your place?" subtitle="Pick a category" />
			<div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto">
				{categories.map((item) => (
					<div key={item.label} className="col-span-1">
						<CategoryInput
							onClick={(category) => setCustomValue('category', category)}
							selected={category === item.label}
							label={item.label}
							icon={item.icon}
						/>
					</div>
				))}
			</div>
		</div>
	);

	if (step === STEPS.LOCATION) {
		bodyContent = (
			<div className="flex flex-col gap-8">
				<Heading title="Where is your place located?" subtitle="Help guests find you!" />
				{/* <CustomSelect  value={location} onChange={(value) => setCustomValue('location', value)} /> */}
			</div>
		);
	}

	if (step === STEPS.INFO) {
		bodyContent = (
			<div className="flex flex-col gap-8">
				<Heading title="Share some basics about your place" subtitle="What amenitis do you have?" />
				<Counter
					onChange={(value) => setCustomValue('guestCount', value)}
					value={guestCount}
					title="Guests"
					subtitle="How many guests do you allow?"
				/>
				<hr />
				<Counter
					onChange={(value) => setCustomValue('roomCount', value)}
					value={roomCount}
					title="Rooms"
					subtitle="How many rooms do you have?"
				/>
				<hr />
				<Counter
					onChange={(value) => setCustomValue('bathroomCount', value)}
					value={bathroomCount}
					title="Bathrooms"
					subtitle="How many bathrooms do you have?"
				/>
			</div>
		);
	}

	if (step === STEPS.IMAGES) {
		bodyContent = (
			<div className="flex flex-col gap-8">
				<Heading title="Add a photo of your place" subtitle="Show guests what your place looks like!" />
			</div>
		);
	}

	if (step === STEPS.DESCRIPTION) {
		bodyContent = (
			<div className="flex flex-col gap-8">
				<Heading title="How would you describe your place?" subtitle="Short and sweet works best!" />
				<Input id="title" label="Title" disabled={isLoading} register={register} errors={errors} required />
				<hr />
				<Input id="description" label="Description" disabled={isLoading} register={register} errors={errors} required />
			</div>
		);
	}

	if (step === STEPS.PRICE) {
		bodyContent = (
			<div className="flex flex-col gap-8">
				<Heading title="Now, set your price" subtitle="How much do you charge per night?" />
				<Input
					id="price"
					label="Price"
					formatPrice
					type="number"
					disabled={isLoading}
					register={register}
					errors={errors}
					required
				/>
			</div>
		);
	}

	return (
		<Modal
			title="Your home"
			isOpen={rentModalStore.isOpen}
			onClose={rentModalStore.onClose}
			onSubmit={handleSubmit(onSubmit)}
			actionLabel={actionLabel}
			secondaryActionLabel={secondaryActionLabel}
			secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
			body={bodyContent}
		/>
	);
};
