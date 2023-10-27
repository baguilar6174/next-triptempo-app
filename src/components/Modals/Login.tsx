'use client';

import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Modal } from './Modal';
import { Heading } from '../Heading';
import { Input } from '../Inputs/Input';
import { Button } from '../Button';
import { useLoginModalStore, useRegisterModalStore } from '../../store';

export const LoginModal = () => {
	const registerModalStore = useRegisterModalStore();
	const loginModalStore = useLoginModalStore();

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
		loginModalStore.onClose();
		setIsLoading(false);
	};

	const onToggle = React.useCallback(() => {
		loginModalStore.onClose();
		registerModalStore.onOpen();
	}, [loginModalStore, registerModalStore]);

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
			<Button label="Continue with Google" icon={FcGoogle} onClick={() => {}} />
			<Button label="Continue with Github" icon={AiFillGithub} onClick={() => {}} />
			<div className="text-neutral-500 text-center mt-4 font-light">
				<div className="justify-center flex flex-row items-center gap-2">
					<div>First time using Airbnb?</div>
					<div onClick={onToggle} className="text-neutral-800 cursor-pointer hover:underline">
						Create an account
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<Modal
			disabled={isLoading}
			isOpen={loginModalStore.isOpen}
			title="Login"
			actionLabel="Continue"
			onClose={loginModalStore.onClose}
			onSubmit={handleSubmit(onSubmit)}
			body={bodyContent}
			footer={footerContent}
		/>
	);
};
