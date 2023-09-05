'use client';

import React from 'react';
import { SafeListing } from '../../interfaces/listing';
import { SafeUser } from '../../interfaces/user';
import { Container } from '../../components/Container';
import { categories } from '../../components/Navbar/Categories';
import { ListingHead } from '../../components/Listings/ListingHead';
import { ListingInfo } from '../../components/Listings/ListingInfo';
import { ListingReservation } from '../../components/Listings/ListingReservation';
import { useLoginModalStore } from '../../store';
import { useRouter } from 'next/navigation';

interface ListingClientProps {
	listing: SafeListing;
	currentUser?: SafeUser;
}

export const ListingClient: React.FC<ListingClientProps> = (props: ListingClientProps) => {
	const { listing, currentUser } = props;

	const router = useRouter();
	const loginModal = useLoginModalStore();

	const [isLoading, setIsLoading] = React.useState(false);

	const category = React.useMemo(() => {
		return categories.find((items) => items.label === listing.category);
	}, [listing.category]);

	const onCreateReservation = React.useCallback(() => {
		if (!currentUser) return loginModal.onOpen();
		setIsLoading(true);
		router.push('/trips');
		setIsLoading(false);
	}, [currentUser, loginModal, router]);

	return (
		<Container>
			<div className="max-w-screen-lg mx-auto">
				<div className="flex flex-col gap-6">
					<ListingHead
						title={listing.title}
						imageSrc={listing.imageSrc}
						locationValue={listing.locationValue}
						id={listing.id}
						currentUser={currentUser}
					/>
					<div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
						<ListingInfo
							category={category}
							description={listing.description}
							roomCount={listing.roomCount}
							guestCount={listing.guestCount}
							bathroomCount={listing.bathroomCount}
						/>
						<div className="order-first mb-10 md:order-last md:col-span-3">
							<ListingReservation
								price={listing.price}
								totalPrice={listing.price}
								onSubmit={onCreateReservation}
								disabled={isLoading}
							/>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};
