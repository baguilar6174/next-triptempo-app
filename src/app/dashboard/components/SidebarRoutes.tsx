'use client';

import React from 'react';
import { BarChart4, Building2, PanelsTopLeft, Settings, ShieldCheck, CircleHelpIcon, Calendar } from 'lucide-react';
import Link from 'next/link';

import { cn } from '@/utils';
import { ONE } from '@/core';
import { Separator } from '@/components/ui/separator';
import { Button } from '../../../components/ui/button';
import { usePathname } from 'next/navigation';

export const dataGeneralSidebar = [
	{
		icon: Building2,
		label: 'Inicio',
		href: '/dashboard'
	},
	{
		icon: Calendar,
		label: 'Calendar',
		href: '/'
	},
	{
		icon: BarChart4,
		label: 'Statistics',
		href: '/'
	},
	{
		icon: PanelsTopLeft,
		label: 'Settings',
		href: '/'
	}
];

export const dataToolsSidebar = [
	{
		icon: PanelsTopLeft,
		label: 'Settings',
		href: '/'
	},
	{
		icon: CircleHelpIcon,
		label: 'About',
		href: '/'
	}
];

export const dataSupportSidebar = [
	{
		icon: Settings,
		label: 'Logout',
		href: '/'
	},
	{
		icon: ShieldCheck,
		label: 'Help',
		href: '/'
	}
];

export const SidebarRoutes = (): JSX.Element => {
	const pathname = usePathname();

	return (
		<div className="flex flex-col justify-between h-full">
			<div>
				<div className="p-2 md:p-6">
					<p>General</p>
					{dataGeneralSidebar.map(({ label, href, icon: Icon }) => (
						<Link
							key={label}
							href={href}
							className={cn(
								'flex gap-x-2 mt-2 light:text-slate-700 dark:text-white text-sm items-center hover:bg-slate-300/20 p-2 rounded-lg cursor-pointer',
								pathname === href && 'bg-slate-400/20'
							)}
						>
							<Icon className="w-5 h-5" strokeWidth={ONE} />
							{label}
						</Link>
					))}
				</div>
				<Separator />
				<div className="p-2 md:p-6">
					<p>Tools</p>
					{dataToolsSidebar.map(({ label, href, icon: Icon }) => (
						<Link
							key={label}
							href={href}
							className={cn(
								'flex gap-x-2 mt-2 light:text-slate-700 dark:text-white text-sm items-center hover:bg-slate-300/20 p-2 rounded-lg cursor-pointer'
							)}
						>
							<Icon className="w-5 h-5" strokeWidth={ONE} />
							{label}
						</Link>
					))}
				</div>
				<Separator />
				<div className="p-2 md:p-6">
					<p>Tools</p>
					{dataSupportSidebar.map(({ label, href, icon: Icon }) => (
						<Link
							key={label}
							href={href}
							className={cn(
								'flex gap-x-2 mt-2 light:text-slate-700 dark:text-white text-sm items-center hover:bg-slate-300/20 p-2 rounded-lg cursor-pointer'
							)}
						>
							<Icon className="w-5 h-5" strokeWidth={ONE} />
							{label}
						</Link>
					))}
				</div>
			</div>
			<div>
				<div className="text-center p-6">
					<Button variant="outline" className="w-full">
						Upgrade to Pro
					</Button>
				</div>
				<Separator />
				<footer className="mt-3 mb-10 p-3 text-center">
					{new Date().getFullYear()} © Trip Tempo All Rights Reserved
				</footer>
			</div>
		</div>
	);
};
