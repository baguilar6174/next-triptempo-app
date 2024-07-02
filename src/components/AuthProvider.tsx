'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import { API } from '@/core';
import { useAuthStore } from '@/stores/auth.store';

export function AuthProvider({ children }: { children: React.ReactNode }): React.JSX.Element {
	const { isAuthenticated, token } = useAuthStore();
	const router = useRouter();

	React.useEffect(() => {
		if (!isAuthenticated && !window.location.pathname.startsWith('/auth/login')) router.push('/auth/login');
		const interceptor = API.interceptors.request.use((config) => {
			if (token) config.headers.Authorization = `Bearer ${token}`;
			return config;
		});
		return () => {
			API.interceptors.request.eject(interceptor);
		};
	}, [isAuthenticated, router, token]);

	return <>{children}</>;
}
