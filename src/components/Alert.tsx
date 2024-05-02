import React from 'react';
import { SEVEN_HUNDRED, TWO_HUNDRED } from '../constants';

export const VARIANTS = {
	ERROR: 'red',
	INFO: 'blue',
	WARNING: 'yellow',
	SUCCESS: 'green'
} as const;

interface AlertProps {
	kind?: 'ERROR' | 'INFO' | 'WARNING' | 'SUCCESS';
	handleClose?: () => void;
	title: string;
	content?: string;
}

export const Alert: React.FC<AlertProps> = (props: AlertProps) => {
	const { title, content, handleClose, kind = 'INFO' } = props;
	const variant = VARIANTS[kind];

	/* TODO: verify bg and variant colors */
	return (
		<div
			className={`${getColor('bg', TWO_HUNDRED)} ${getColor('text', SEVEN_HUNDRED)} px-4 py-3 rounded relative`}
			role="alert"
		>
			<strong className="font-bold">{title}</strong>
			{content && <span className="block sm:inline">{content}</span>}
			<button onClick={handleClose} className="absolute top-0 bottom-0 right-0 px-4 py-3">
				<svg className={'fill-current h-6 w-6'} role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
					<title>Close</title>
					<path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
				</svg>
			</button>
		</div>
	);

	function getColor(prop: string, intensity: number): string {
		switch (variant) {
			case 'red':
				return `${prop}-red-${intensity}`;
			case 'blue':
				return `${prop}-blue-${intensity}`;
			case 'yellow':
				return `${prop}-yellow-${intensity}`;
			case 'green':
				return `${prop}-green-${intensity}`;
			default:
				return `${prop}-blue-${intensity}`;
		}
	}
};
