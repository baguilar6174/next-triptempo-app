'use client';

import React from 'react';
import { Container } from './Container';
import { Button } from './ui/button';
import { useSchedulesStore } from '../stores';
import { ResultCard } from './ResultCard';
import { Loader } from './Loader';
import { ZERO } from '../lib/constants';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useToast } from './ui/use-toast';
import { Text } from './Text';
import { type CityEntity } from '../types/city.entity';

interface SearchProps {
	cities: CityEntity[];
}

export const SearchClient: React.FC<SearchProps> = (props: SearchProps) => {
	const { cities } = props;

	const isLoading = useSchedulesStore((state) => state.isLoading);
	const providers = useSchedulesStore((state) => state.providers);
	const fetchSchedules = useSchedulesStore((state) => state.fetchSchedules);

	const { toast } = useToast();

	const [startCity, setStartCity] = React.useState<string>();
	const [endCity, setEndCity] = React.useState<string>();

	return (
		<Container>
			<Text tag="h1" className="text-center">
				Trip Tempo
			</Text>
			<Text tag="h3">Where do you wanna go?</Text>
			<Text tag="p">Find the perfect schedule for your trip!</Text>
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
			{providers && providers.length === ZERO && (
				<div className="py-20 flex flex-col gap-2 justify-center items-center">
					<Text tag="h4">No results to show</Text>
					<Text tag="p">Try changing your search.</Text>
				</div>
			)}
			{providers && providers.length !== ZERO && (
				<React.Fragment>
					<Text tag="p">We&apos;ve found {providers.length} results</Text>
					{providers.map((provider) => (
						<ResultCard key={provider.id} provider={provider} />
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
