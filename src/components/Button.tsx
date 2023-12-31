'use client';

import React from 'react';
import { IconType } from 'react-icons';

interface ButtonProps {
	label: string;
	// eslint-disable-next-line no-unused-vars
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
	disabled?: boolean;
	small?: boolean;
	icon?: IconType;
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
	const { label, onClick, disabled, small, icon: Icon } = props;
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-sm transition w-full border-[1.5px] border-dashed hover:border-solid hover:border-darkNavy text-light hover:text-darkNavy hover:bg-darkNavy/10
      ${small ? 'py-1' : 'py-3'} ${small ? 'text-sm' : 'text-md'} ${small ? 'font-light' : 'font-semibold'} ${
				small ? 'border-[1px]' : 'border-2'
			}`}
		>
			{Icon && <Icon size={24} className="absolute left-4 top-3" />}
			{label}
		</button>
	);
};
