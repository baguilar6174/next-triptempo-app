'use client';

import { HTMLInputTypeAttribute } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { IconType } from 'react-icons';

interface InputProps {
	id: string;
	label: string;
	type?: HTMLInputTypeAttribute;
	disabled?: boolean;
	icon?: IconType;
	required?: boolean;
	register: UseFormRegister<any>;
	errors: FieldErrors;
}

export const Input: React.FC<InputProps> = (props: InputProps) => {
	const { id, label, type = 'text', disabled, icon: Icon, required, register, errors } = props;

	return (
		<div className="w-full relative">
			{Icon && <Icon size={24} className="text-neutral-700 absolute top-5 left-5" />}
			<input
				id={id}
				disabled={disabled}
				{...register(id, { required })}
				placeholder=" "
				type={type}
				className={`peer w-full p-4 pt-6 font-light bg-dark border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed
          ${Icon ? 'pl-12' : 'pl-4'}
          ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
          ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}
        `}
			/>
			<label
				className={`
          absolute text-md duration-150 transform -translate-y-3 top-5 origin-[0] 
          ${Icon ? 'left-12' : 'left-4'}
          peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4
          ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}
        `}
			>
				{label}
			</label>
		</div>
	);
};
