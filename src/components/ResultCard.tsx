import React from 'react';
import { Schedule } from '../interfaces/schedule';
import Image from 'next/image';

interface ResultCardProps {
	schedule: Schedule;
}

export const ResultCard: React.FC<ResultCardProps> = (props: ResultCardProps) => {
	const {
		schedule: {
			transportationProvider,
			schedules,
			price,
			transportationProviderLogo,
			transportationProviderDetails,
			distance,
			estimatedTravelTime
		}
	} = props;

	return (
		<div className="mt-10 grid grid-cols-1 gap-8">
			{/* result card */}
			<div className="bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 w-full shadow-lg">
				{/* provider detail */}
				<div className="w-full md:w-[40%]">
					<div className="flex items-center justify-between">
						<Image
							alt="Avatar"
							className="rounded-full"
							height="80"
							width="80"
							src={`/images/buses/${transportationProviderLogo}`}
						/>
						<div className="text-right">
							<h3 className="text-xl text-neutral-500 mb-2 font-semibold">$ {price}</h3>
							<p className="text-neutral-400">{distance} km aprox</p>
						</div>
					</div>
					<div className="mt-4">
						<h2 className="text-xl flex items-center gap-4 mb-2">
							{transportationProvider}
							<span className="text-xs py-1 px-2 bg-rose-500 text-white font-bold rounded-md">
								{estimatedTravelTime} hours aprox
							</span>
						</h2>
						<p className="text-neutral-500">{transportationProviderDetails}</p>
					</div>
				</div>
				{/* schedules */}
				<div className="w-full md:w-[60%] flex flex-wrap justify-center items-center gap-2">
					{schedules.map((schedule) => (
						<div
							key={schedule}
							className="rounded-2xl border border-rose-500 p-3 text-rose-500 text-md flex items-center justify-center"
						>
							<div className="text-md font-bold">{schedule}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
