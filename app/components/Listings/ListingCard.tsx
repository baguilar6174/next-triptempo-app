'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { SafeListing } from '../../interfaces/listing';
import { SafeUser } from '../../interfaces/user';
import { SafeReservation } from '../../interfaces/reservation';
import { Button } from '../Button';
import { HeartButton } from '../HeartButton';

interface ListingCardProps {
	data: SafeListing;
	reservation?: SafeReservation;
	// eslint-disable-next-line no-unused-vars
	onAction?: (id: string) => void;
	disabled?: boolean;
	actionLabel?: string;
	actionId?: string;
	currentUser?: SafeUser;
}

export const ListingCard: React.FC<ListingCardProps> = (props: ListingCardProps) => {
	const { data, reservation, onAction, disabled, actionLabel, actionId = '', currentUser } = props;

	const router = useRouter();

	const handleCancel = React.useCallback(
		(e: React.MouseEvent<HTMLButtonElement>) => {
			e.stopPropagation();
			if (disabled) return;
			onAction?.(actionId);
		},
		[onAction, actionId, disabled]
	);

	const price = React.useMemo(() => {
		if (reservation) return reservation.totalPrice;
		return data.price;
	}, [reservation, data.price]);

	const reservationDate = React.useMemo(() => {
		if (!reservation) return null;
		const startDate = new Date(reservation.startDate);
		const endDate = new Date(reservation.endDate);
		return `${startDate} - ${endDate}`;
	}, [reservation]);

	return (
		<div onClick={() => router.push(`/listings/${data.id}`)} className="col-span-1 cursor-pointer group">
			<div className="flex flex-col gap-2 w-full">
				<div className="aspect-square w-full relative overflow-hidden rounded-xl">
					<Image
						fill
						className="object-cover h-full w-full group-hover:scale-110 transition"
						src={data.imageSrc}
						alt="Listing"
					/>
					<div className="absolute top-3 right-3">
						<HeartButton listingId={data.id} currentUser={currentUser} />
					</div>
				</div>
				{/* <div className="font-semibold text-lg">
					{location?.region}, {location?.label}
				</div> */}
				<div className="font-light text-neutral-500">{reservationDate || data.category}</div>
				<div className="flex flex-row items-center gap-1">
					<div className="font-semibold">$ {price}</div>
					{!reservation && <div className="font-light">night</div>}
				</div>
				{onAction && actionLabel && <Button disabled={disabled} small label={actionLabel} onClick={handleCancel} />}
			</div>
		</div>
	);
};
