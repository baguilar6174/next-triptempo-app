import React from 'react';
import { Button } from '../Button';

interface ListingReservationProps {
	price: number;
	totalPrice: number;
	onSubmit: () => void;
	disabled?: boolean;
}

export const ListingReservation: React.FC<ListingReservationProps> = (props: ListingReservationProps) => {
	const { price, totalPrice, onSubmit, disabled } = props;
	return (
		<div className="bg-white rounded-xl border-[1px]border-neutral-200 overflow-hidden">
			<div className="flex flex-row items-center gap-1 p-4">
				<div className="text-2xl font-semibold">$ {price}</div>
				<div className="font-light text-neutral-600">night</div>
			</div>
			<hr />
			<div className="p-4">
				<Button disabled={disabled} label="Reserve" onClick={onSubmit} />
			</div>
			<hr />
			<div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
				<div>Total</div>
				<div>$ {totalPrice}</div>
			</div>
		</div>
	);
};
