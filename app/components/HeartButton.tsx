'use client';

import React from 'react';
import { SafeUser } from '../interfaces/user';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface HeartButtonProps {
	listingId: string;
	currentUser?: SafeUser;
}

export const HeartButton: React.FC<HeartButtonProps> = (props: HeartButtonProps) => {
	// eslint-disable-next-line no-unused-vars
	const { listingId, currentUser } = props;

	const hasFavorited = false;
	const toggleFavorite = () => {};

	return (
		<div onClick={toggleFavorite} className="relative hover:opacity-80 transition cursor-pointer">
			<AiOutlineHeart size={28} className="fill-white absolute -top-[2px] -right-[2px]" />
			<AiFillHeart size={24} className={hasFavorited ? 'fill-rose-500' : 'fill-neutral-500/70'} />
		</div>
	);
};
