'use client';

import React from 'react';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog';
import { Text } from '@/components/Text';
import { Button } from '../../../../components/ui/button';
import { FormCreate } from './FormCreate';

export const PageHeader = (): JSX.Element => {
	const [openModalCreate, setOpenModalCreate] = React.useState<boolean>(false);

	return (
		<div className="flex justify-between items-center">
			<Text tag="h2">Cities</Text>
			<Dialog open={openModalCreate} onOpenChange={setOpenModalCreate}>
				<DialogTrigger asChild>
					<Button>Create City</Button>
				</DialogTrigger>
				<DialogContent className="sm:max-w-[625px]">
					<DialogHeader>
						<DialogTitle>Are you absolutely sure?</DialogTitle>
						<DialogDescription>
							This action cannot be undone. This will permanently delete your account and remove your data from our
							servers.
						</DialogDescription>
					</DialogHeader>
					<FormCreate setOpenModal={setOpenModalCreate} />
				</DialogContent>
			</Dialog>
		</div>
	);
};
