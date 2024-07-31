'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { ONE } from '@/core';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/stores/auth.store';

export const DashboardNavbar = (): JSX.Element => {
	const logout = useAuthStore((state) => state.logout);

	return (
		<div className="flex items-center px-2 gap-x-4 md:px-6 justify-between w-full bg-background border-b h-20">
			<div className="block md:hidden">
				<Sheet>
					<SheetTrigger className="flex items-center">
						<Menu />
					</SheetTrigger>
					<SheetContent side={'left'}>
						<p>Sidebar routes</p>
					</SheetContent>
				</Sheet>
			</div>
			<div className="relative w-[300px]">
				<Input placeholder="Search ..." />
				<Search strokeWidth={ONE} className="absolute right-2 top-2" />
			</div>
			<div className="flex items-center gap-x-2">
				<Button variant="outline" onClick={logout}>
					Logout
				</Button>
			</div>
		</div>
	);
};
