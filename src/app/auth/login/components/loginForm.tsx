'use client';

import React from 'react';
import { cn } from '@/utils';
import { type z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AlertCircle } from 'lucide-react';

import { loginSchema } from '@/schemas';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface LoginFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export const LoginForm = ({ className, ...props }: LoginFormProps): JSX.Element => {
	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: { email: '', password: '' }
	});

	return (
		<div className={cn('grid gap-6', className)} {...props}>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-2">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem className="grid gap-1">
								<FormLabel className="sr-only">Email</FormLabel>
								<FormControl>
									<Input
										placeholder="Your email"
										autoCapitalize="none"
										autoComplete="email"
										autoCorrect="off"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem className="grid gap-1">
								<FormLabel className="sr-only">Password</FormLabel>
								<FormControl>
									<Input placeholder="Your password" type="password" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Alert variant="destructive" className="my-2">
						<AlertCircle className="h-4 w-4" />
						<AlertDescription>Your session has expired. Please log in again.</AlertDescription>
					</Alert>
					<Button type="submit">Sign In</Button>
				</form>
			</Form>
		</div>
	);

	function onSubmit(data: z.infer<typeof loginSchema>): void {
		const validateFields = loginSchema.safeParse(data);
		if (validateFields.success) {
			// eslint-disable-next-line no-console
			console.log(validateFields.data);
		}
	}
};
