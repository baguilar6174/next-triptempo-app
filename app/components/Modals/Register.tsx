'use client';

import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import useRegisterModal from '../../hooks/useRegisterModal';
import { Modal } from './Modal';
import { Heading } from '../Heading';
import { Input } from '../Inputs/Input';
import { toast } from 'react-hot-toast';
import { Button } from '../Button';

export const RegisterModal = () => {
	const registerModal = useRegisterModal();
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
		toast.success('Success');
		registerModal.onClose();
		setIsLoading(false);
	};

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
			<Button outline label="Continue with Google" icon={FcGoogle} onClick={() => {}} />
			<Button outline label="Continue with GitHub" icon={AiFillGithub} onClick={() => {}} />
			<div className="text-neutral-500 text-center mt-4 font-light">
				<div className="flex flex-row items-center justify-center gap-2">
					<div>Already have an account?</div>
					<div onClick={registerModal.onClose} className="text-neutral-800 cursor-pointer hover:underline">
						Log in
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<Modal
			disabled={isLoading}
			isOpen={registerModal.isOpen}
			title="Register"
			actionLabel="Continue"
			onClose={registerModal.onClose}
			onSubmit={handleSubmit(onSubmit)}
			body={bodyContent}
			footer={footerContent}
		/>
	);
};
