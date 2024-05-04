import React from 'react';
import { type Schedule } from '../types';
import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

interface ResultCardProps {
	schedule: Schedule;
}

export const ResultCard: React.FC<ResultCardProps> = (props: ResultCardProps) => {
	const {
		schedule: { name, schedules, price, details, distance, estimatedTravelTime }
	} = props;

	return (
		<div className="mt-10 grid grid-cols-1 gap-8">
			<Card>
				<CardHeader>
					<CardTitle>{name}</CardTitle>
					<CardDescription>{details}</CardDescription>
				</CardHeader>
				<CardContent className="p-8 flex flex-col md:flex-row gap-8 w-full">
					{/* provider detail */}
					<div className="w-full md:w-[40%]">
						<div className="flex items-center justify-between">
							{/* <Image
							alt="Avatar"
							className="rounded-full"
							height="80"
							width="80"
							src={`/images/buses/${logo}`}
						/> */}
							Logo
							<div className="text-right">
								<h3 className="text-xl mb-2 font-semibold">$ {price}</h3>
								<p>{distance} km aprox</p>
							</div>
						</div>
						<div className="mt-4">
							<h2 className="text-xl flex items-center gap-4 mb-2">
								<Badge>{estimatedTravelTime} hours aprox</Badge>
							</h2>
						</div>
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
