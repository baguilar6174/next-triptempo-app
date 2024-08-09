'use client';

import { type ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, Pencil, Trash } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { type City } from '@/core/entities';
import { useCitiesStore } from '@/stores/city.store';

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
		cell: ({ row }) => <TableActions id={row.original.id} />
	}
];

interface TableActionsProps {
	id: string;
}

export const TableActions = (props: TableActionsProps): JSX.Element => {
	const { id } = props;

	const deleteCity = useCitiesStore((state) => state.delete);

	return (
		<div className="flex gap-x-2">
			<Button size="icon">
				<Pencil className="h-4 w-4" />
			</Button>
			<Button
				variant="destructive"
				size="icon"
				onClick={async () => {
					await deleteCity(id);
				}}
			>
				<Trash className="h-4 w-4" />
			</Button>
		</div>
	);
};
