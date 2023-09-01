import React from 'react';
import { SafeUser } from '../../interfaces/user';
import { HeartButton } from '../HeartButton';
import Image from 'next/image';
import { Heading } from '../Heading';
import { useCountriesStore } from '../../store';

interface ListingHeadProps {
	title: string;
	locationValue: string;
	imageSrc: string;
	id: string;
	currentUser?: SafeUser;
}

export const ListingHead: React.FC<ListingHeadProps> = (props: ListingHeadProps) => {
	const { title, locationValue, imageSrc, id, currentUser } = props;

	const { getByValue } = useCountriesStore();
	const location = getByValue(locationValue);

	return (
		<React.Fragment>
			<Heading title={title} subtitle={`${location?.region}, ${location?.label}`} />
			<div className="w-full h-[60vh] overflow-hidden rounded-xl relative">
				<Image src={imageSrc} fill className="object-cover w-full" alt="Image" />
				<div className="absolute top-5 right-5">
					<HeartButton listingId={id} currentUser={currentUser} />
				</div>
			</div>
		</React.Fragment>
	);
};
