'use client';

import { type HTMLInputTypeAttribute } from 'react';
import { type FieldErrors, type UseFormRegister } from 'react-hook-form';

interface InputProps {
	id: string;
	label: string;
	type?: HTMLInputTypeAttribute;
	disabled?: boolean;
	required?: boolean;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	register: UseFormRegister<any>;
	errors: FieldErrors;
}

export const Input: React.FC<InputProps> = (props: InputProps) => {
	const { id, label, type = 'text', disabled, required, register, errors } = props;

	return (
		<div className="w-full relative">
			<input
				id={id}
				disabled={disabled}
				{...register(id, { required })}
				placeholder=" "
				type={type}
				className={`peer w-full p-4 pt-6 font-light border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed
          ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
          ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}
        `}
			/>
			<label
				className={`
          absolute text-md duration-150 transform -translate-y-3 top-5 origin-[0] 
          peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4
          ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}
        `}
			>
				{label}
			</label>
		</div>
	);
};
