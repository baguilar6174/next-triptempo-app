import React from 'react';
import { IconType } from 'react-icons';
import { Avatar } from '../Avatar';
import { ListingCategory } from './ListingCategory';

interface ListingInfoProps {
	description: string;
	guestCount: number;
	roomCount: number;
	bathroomCount: number;
	category: { icon: IconType; label: string; description: string } | undefined;
}

export const ListingInfo: React.FC<ListingInfoProps> = (props: ListingInfoProps) => {
	const { description, guestCount, roomCount, bathroomCount, category } = props;

	return (
		<div className="col-span-4 flex flex-col gap-8">
			<div className="flex flex-col gap-2">
				<div className="text-xl font-semibold flex flex-row items-center gap-2">
					<div>Hosted by Bryan</div>
					<Avatar />
				</div>
				<div className="flex flex-row items-center gap-4 font-light text-neutral-500">
					<div>{guestCount} guests</div>
					<div>{roomCount} rooms</div>
					<div>{bathroomCount} bathrooms</div>
				</div>
			</div>
			<hr />
			{category && <ListingCategory icon={category.icon} label={category?.label} description={category?.description} />}
			<hr />
			<div className="text-lg font-light text-neutral-500">{description}</div>
		</div>
	);
};
