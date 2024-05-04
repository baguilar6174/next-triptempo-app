/* eslint-disable @typescript-eslint/no-misused-promises */
'use client';

import React from 'react';
import { type FieldValues, type SubmitHandler, useForm } from 'react-hook-form';
import { Modal } from './Modal';
import { Heading } from '../Heading';
import { Input } from '../Inputs/Input';
import { useLoginModalStore, useRegisterModalStore } from '../../stores';

export const RegisterModal = (): JSX.Element => {
	const onClose = useRegisterModalStore((state) => state.onClose);
	const isOpen = useRegisterModalStore((state) => state.isOpen);
	const modalLoginOnOpen = useLoginModalStore((state) => state.onOpen);

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FieldValues>({
		defaultValues: {
			name: '',
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
		modalLoginOnOpen();
		onClose();
	}, [modalLoginOnOpen, onClose]);

	const bodyContent = (
		<div className="flex flex-col gap-4">
			<Heading title="Wlecome to Trip Tempo" subtitle="Create an account" />
			<Input id="email" label="Email" type="email" disabled={isLoading} register={register} errors={errors} required />
			<Input id="name" label="Name" disabled={isLoading} register={register} errors={errors} required />
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
				<div className="flex flex-row items-center justify-center gap-2">
					<div className="text-light">Already have an account?</div>
					<div onClick={onToggle} className="text-light/80 cursor-pointer hover:underline">
						Log in
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<Modal
			disabled={isLoading}
			isOpen={isOpen}
			title="Register"
			actionLabel="Continue"
			onClose={onClose}
			onSubmit={handleSubmit(onSubmit)}
			body={bodyContent}
			footer={footerContent}
		/>
	);
};
