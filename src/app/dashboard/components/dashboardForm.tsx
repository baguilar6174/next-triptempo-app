'use client';

import React from 'react';

import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/stores/auth.store';

export const DashboardForm = (): JSX.Element => {
	const logout = useAuthStore((state) => state.logout);

	return (
		<div>
			<Button variant="outline" onClick={logout}>
				<span className="sr-only">Logout</span>
			</Button>
		</div>
	);
};
