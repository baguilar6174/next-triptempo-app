'use client';

import React from 'react';
import { Container } from './Container';
import { Button } from './ui/button';
import { useTripItinerariesStore } from '../stores/tripItinerary.store';
import { ResultCard } from './ResultCard';
import { Loader } from './Loader';
import { ZERO } from '../core/contants';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useToast } from './ui/use-toast';
import { Text } from './Text';
import { type CityEntity } from '../core/entities/city.entity';

interface SearchProps {
	cities: CityEntity[];
}

export const SearchClient: React.FC<SearchProps> = (props: SearchProps) => {
	const { cities } = props;

	const isLoading = useTripItinerariesStore((state) => state.isLoading);
	const tripItineraries = useTripItinerariesStore((state) => state.tripItineraries);
	const error = useTripItinerariesStore((state) => state.error);
	const getTripItineraries = useTripItinerariesStore((state) => state.getTripItineraries);

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
			{tripItineraries && tripItineraries.length === ZERO && (
				<div className="py-20 flex flex-col gap-2 justify-center items-center">
					<Text tag="h4">No results to show</Text>
					<Text tag="p">Try changing your search.</Text>
				</div>
			)}
			{tripItineraries && tripItineraries.length !== ZERO && (
				<React.Fragment>
					<Text tag="p">We&apos;ve found {tripItineraries.length} results</Text>
					{tripItineraries.map((tripItinerary) => (
						<ResultCard key={tripItinerary.id} tripItinerary={tripItinerary} />
					))}
				</React.Fragment>
			)}
			{error && <Text tag="p">{error.message}</Text>}
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
		await getTripItineraries(startCity, endCity);
	}
};
