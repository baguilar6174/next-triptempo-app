'use client';

import { type Dispatch, type SetStateAction } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { FOUR } from '@/core';

interface FormCreateProps {
	setOpenModal: Dispatch<SetStateAction<boolean>>;
}

const formSchema = z.object({
	username: z.string().min(FOUR, {
		message: 'Username must be at least 2 characters.'
	})
});

export const FormCreate = (props: FormCreateProps): JSX.Element => {
	const { setOpenModal } = props;

	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: ''
		}
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>): void {
		// eslint-disable-next-line no-console
		console.log(values);
		setOpenModal(false);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<div className="grid grid-cols-2 gap-3">
					<FormField
						control={form.control}
						name="username"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Username</FormLabel>
								<FormControl>
									<Input placeholder="shadcn" {...field} />
								</FormControl>
								<FormDescription>This is your public display name.</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
};
