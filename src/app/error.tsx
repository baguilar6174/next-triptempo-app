'use client';

import React from 'react';
import { Heading } from '../components/Heading';

interface ErrorStateProps {
	error: Error;
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
	React.useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className="flex flex-col gap-2 justify-center items-center">
			<Heading center title={'Uh Oh'} subtitle={'Something went wrong!'} />
		</div>
	);
};

export default ErrorState;
