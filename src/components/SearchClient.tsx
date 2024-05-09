'use client';

import React from 'react';
import { Container } from './Container';
import { Button } from './ui/button';
import { useSchedulesStore } from '../stores';
import { ResultCard } from './ResultCard';
import { Loader } from './Loader';
import { ZERO } from '../lib/constants';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { type City } from '../types';
import { useToast } from './ui/use-toast';

interface SearchProps {
	cities: City[];
}

export const SearchClient: React.FC<SearchProps> = (props: SearchProps) => {
	const { cities } = props;

	const isLoading = useSchedulesStore((state) => state.isLoading);
	const schedules = useSchedulesStore((state) => state.schedules);
	const fetchSchedules = useSchedulesStore((state) => state.fetchSchedules);

	const { toast } = useToast();

	const [startCity, setStartCity] = React.useState<string>();
	const [endCity, setEndCity] = React.useState<string>();

	return (
		<Container>
			<h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight">Where do you wanna go?</h1>
			<h3 className="scroll-m-20 text-md font-semibold tracking-tight">Find the perfect schedule for your trip!</h3>
			<div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-8">
				<Select onValueChange={setStartCity}>
					<SelectTrigger>
						<SelectValue placeholder="Where from?" />
					</SelectTrigger>
					<SelectContent>
						{cities
							.filter((city) => city.id !== endCity)
							.map((city) => (
								<SelectItem key={city.id} value={String(city.id)}>
									{city.name}, {city.province}
								</SelectItem>
							))}
					</SelectContent>
				</Select>
				<Select onValueChange={setEndCity}>
					<SelectTrigger>
						<SelectValue placeholder="Where to?" />
					</SelectTrigger>
					<SelectContent>
						{cities
							.filter((city): boolean => city.id !== startCity)
							.map((city) => (
								<SelectItem key={city.id} value={String(city.id)}>
									{city.name}, <span>{city.province}</span>
								</SelectItem>
							))}
					</SelectContent>
				</Select>
				<Button onClick={onSubmit} variant="outline">
					Search Schedules
				</Button>
			</div>
			{isLoading && <Loader />}
			{schedules && schedules.length === ZERO && (
				<div className="py-20 flex flex-col gap-2 justify-center items-center">
					<h4 className="scroll-m-20 text-xl font-semibold tracking-tight">No results to show</h4>
					<p className="leading-7 [&:not(:first-child)]:mt-6">Try changing your search.</p>
				</div>
			)}
			{schedules && schedules.length !== ZERO && (
				<React.Fragment>
					<div className="pt-10">
						<p className="text-light">We&apos;ve found {schedules.length} results</p>
					</div>
					{schedules.map((schedule) => (
						<ResultCard key={schedule.id} schedule={schedule} />
					))}
				</React.Fragment>
			)}
		</Container>
	);

	async function onSubmit(): Promise<void> {
		if (!startCity || !endCity) {
			toast({
				description: 'You must indicate the city of origin and destination',
				variant: 'destructive'
			});
			return;
		}
		await fetchSchedules(startCity, endCity);
	}
};
