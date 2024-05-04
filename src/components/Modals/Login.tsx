/* eslint-disable @typescript-eslint/no-misused-promises */
'use client';

import React from 'react';
import { type FieldValues, type SubmitHandler, useForm } from 'react-hook-form';
import { Modal } from './Modal';
import { Heading } from '../Heading';
import { Input } from '../Inputs/Input';
import { useLoginModalStore, useRegisterModalStore } from '../../stores';

export const LoginModal = (): JSX.Element => {
	const onClose = useLoginModalStore((state) => state.onClose);
	const isOpen = useLoginModalStore((state) => state.isOpen);
	const modalRegisterOnOpen = useRegisterModalStore((state) => state.onOpen);

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FieldValues>({
		defaultValues: {
			email: '',
			password: ''
		}
	});

	const [isLoading, setIsLoading] = React.useState<boolean>(false);

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);
		console.log(data);
		onClose();
		setIsLoading(false);
	};

	const onToggle = React.useCallback(() => {
		onClose();
		modalRegisterOnOpen();
	}, [onClose, modalRegisterOnOpen]);

	const bodyContent = (
		<div className="flex flex-col gap-4">
			<Heading title="Welcome back" subtitle="Login to your account!" />
			<Input id="email" label="Email" disabled={isLoading} register={register} errors={errors} required />
			<Input
				id="password"
				label="Password"
				type="password"
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
		</div>
	);

	const footerContent = (
		<div className="flex flex-col gap-4 mt-3">
			<hr />
			<div className="text-center mt-4 font-light">
				<div className="justify-center flex flex-row items-center gap-2">
					<div className="text-light">First time using Airbnb?</div>
					<div onClick={onToggle} className="text-light/80 cursor-pointer hover:underline">
						Create an account
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<Modal
			disabled={isLoading}
			isOpen={isOpen}
			title="Login"
			actionLabel="Continue"
			onClose={onClose}
			onSubmit={handleSubmit(onSubmit)}
			body={bodyContent}
			footer={footerContent}
		/>
	);
};
