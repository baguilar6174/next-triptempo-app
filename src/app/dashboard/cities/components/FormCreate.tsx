'use client';

import { type Dispatch, type SetStateAction } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { EMPTY_STRING, FOUR, type Province } from '@/core';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface FormCreateProps {
	setOpenModal: Dispatch<SetStateAction<boolean>>;
	provinces: Province[];
}

const formSchema = z.object({
	id: z.string({ required_error: 'Please enter a id.' }),
	province: z.string({ required_error: 'Please select a province.' }),
	name: z
		.string({ required_error: 'Please enter a name.' })
		.min(FOUR, { message: `Name must be at least ${FOUR} characters.` })
});

export const FormCreate = (props: FormCreateProps): JSX.Element => {
	const { setOpenModal, provinces } = props;

	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: { id: EMPTY_STRING, name: EMPTY_STRING }
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
						name="province"
						render={({ field }) => (
							<FormItem>
								<Select onValueChange={field.onChange} defaultValue={field.value}>
									<FormLabel>Province</FormLabel>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select a province" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{provinces.map((province) => (
											<SelectItem key={province.id} value={String(province.id)}>
												{province.name}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="id"
						render={({ field }) => (
							<FormItem>
								<FormLabel>City ID</FormLabel>
								<FormControl>
									<Input placeholder="Enter a city ID" {...field} />
								</FormControl>
								<FormDescription>Get the ID from here</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input placeholder="Enter a cityname" {...field} />
								</FormControl>
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
