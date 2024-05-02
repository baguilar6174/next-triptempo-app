import React from 'react';
import { Schedule } from '../interfaces/schedule';

interface ResultCardProps {
	schedule: Schedule;
}

export const ResultCard: React.FC<ResultCardProps> = (props: ResultCardProps) => {
	const {
		schedule: { name, schedules, price, details, distance, estimatedTravelTime }
	} = props;

	return (
		<div className="mt-10 grid grid-cols-1 gap-8">
			{/* result card */}
			<div className="border border-white border-dashed p-8 flex flex-col md:flex-row gap-8 w-full">
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
							<h3 className="text-xl text-white mb-2 font-semibold">$ {price}</h3>
							<p className="text-neutral-50">{distance} km aprox</p>
						</div>
					</div>
					<div className="mt-4">
						<h2 className="text-xl flex items-center gap-4 mb-2 text-neutral-100">
							{name}
							<span className="text-xs py-1 px-2 border border-darkNavy text-darkNavy font-bold rounded-md">
								{estimatedTravelTime} hours aprox
							</span>
						</h2>
						<p className="text-neutral-200">{details}</p>
					</div>
				</div>
				{/* schedules */}
				<div className="w-full md:w-[60%] flex flex-wrap justify-center items-center gap-2">
					{schedules.map((schedule) => (
						<div
							key={schedule}
							className="rounded-2xl border border-darkNavy p-3 text-darkNavy text-md flex items-center justify-center"
						>
							<div className="text-md font-bold">{schedule}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
