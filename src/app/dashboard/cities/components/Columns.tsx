'use client';

import { type ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, MoreHorizontal, Pencil } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { type City } from '@/core/entities';

export const columns: Array<ColumnDef<City>> = [
	{
		accessorKey: 'id',
		header: 'ID'
	},
	{
		accessorKey: 'name',
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => {
						column.toggleSorting(column.getIsSorted() === 'asc');
					}}
				>
					Name
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		}
	},
	{
		accessorKey: 'province',
		header: 'Province'
	},
	{
		accessorKey: 'region',
		header: 'Region'
	},
	{
		id: 'actions',
		header: 'Actions',
		cell: ({ row }) => {
			const { id } = row.original;
			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-4 w-8 p-0">
							<span className="sr-only">Open menu</span>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<Link href={`/dashboard/cities/${id}`}>
							<DropdownMenuItem>
								<Pencil className="h-4 w-4 mr-2" />
								Edit
							</DropdownMenuItem>
						</Link>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		}
	}
];
