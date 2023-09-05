import React from 'react';
import { BiDollar } from 'react-icons/bi';
import { Schedule } from '../interfaces/schedule';

interface ResultCardProps {
	schedule: Schedule;
}

export const ResultCard: React.FC<ResultCardProps> = (props: ResultCardProps) => {
	const {
		schedule: { transportationProvider, schedules, price, distance }
	} = props;

	return (
		<div className="mt-10 grid grid-cols-1 gap-8">
			{/* result card */}
			<div className="bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 w-full shadow-lg">
				{/* provider detail */}
				<div className="w-full md:w-[40%]">
					<div className="flex items-center justify-between">
						<BiDollar className="text-7xl bg-rose-500 text-white p-4" />
						<div className="text-right">
							<h3 className="text-xl text-neutral-500 mb-2 font-semibold">$ {price}</h3>
							<p className="text-neutral-400">{distance}</p>
						</div>
					</div>
					<div className="mt-4">
						<h2 className="text-xl flex items-center gap-4 mb-2">
							{transportationProvider}
							{/* <span className="text-xs py-1 px-2 bg-rose-500 text-white font-bold">span</span> */}
						</h2>
						<p className="text-neutral-500">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem quidem illum dolor saepe optio nostrum sit
							mollitia
						</p>
					</div>
				</div>
				{/* schedules */}
				<div className="w-full md:w-[60%] flex flex-wrap justify-center items-center gap-2">
					{schedules.map((schedule) => (
						<div
							key={schedule}
							className="rounded-2xl border border-rose-500 p-3 text-rose-500 text-md flex flex-col items-center justify-center"
						>
							<div className="text-md font-bold">{schedule}</div>
							<div className="font-normal">am</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
