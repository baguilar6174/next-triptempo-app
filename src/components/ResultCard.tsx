import React from 'react';
import { type Schedule } from '../types';
import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Text } from './Text';

interface ResultCardProps {
	schedule: Schedule;
}

export const ResultCard: React.FC<ResultCardProps> = (props: ResultCardProps) => {
	const {
		schedule: { name, schedules, price, details, distance, estimatedTravelTime }
	} = props;

	return (
		<div className="mt-6 grid grid-cols-1 gap-8">
			<Card>
				<CardHeader>
					<CardTitle>{name}</CardTitle>
					<CardDescription>{details}</CardDescription>
				</CardHeader>
				<CardContent className="p-8 flex flex-col md:flex-row gap-8 w-full">
					{/* provider detail */}
					<div className="w-full md:w-[40%]">
						<div className="flex items-center justify-between">
							Logo
							<div className="text-right">
								<Text tag="h3">$ {price}</Text>
								<Text tag="p" className="!mt-0">
									{distance} km aprox
								</Text>
							</div>
						</div>
						<Badge>{estimatedTravelTime} hours aprox</Badge>
					</div>
					{/* schedules */}
					<div className="w-full md:w-[60%] flex flex-wrap justify-center items-center gap-2">
						{schedules.map((schedule) => (
							<Badge key={schedule}>{schedule}</Badge>
						))}
					</div>
				</CardContent>
				<CardFooter>{details}</CardFooter>
			</Card>
		</div>
	);
};
