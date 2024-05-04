'use client';

import React from 'react';

interface ErrorStateProps {
	error: Error;
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
	React.useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className="flex flex-col gap-2 justify-center items-center">
			<h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Uh Oh</h4>
			<p className="leading-7 [&:not(:first-child)]:mt-6">Something went wrong!</p>
		</div>
	);
};

export default ErrorState;
