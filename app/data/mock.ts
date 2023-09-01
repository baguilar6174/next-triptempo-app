import { SafeListing } from '../interfaces/listing';
import { SafeReservation } from '../interfaces/reservation';
import { SafeUser } from '../interfaces/user';

export const getCurrentUser = (): SafeUser => {
	return {
		id: '1',
		name: 'Bryan Aguilar',
		email: 'baguilar@test.com',
		emailVerified: true,
		image: ''
	};
};

export const getListings = (): SafeListing[] => {
	return [
		{
			id: '1',
			title: 'title',
			description: 'description',
			imageSrc:
				'https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXRpZnVsJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww&w=1000&q=80',
			category: 'Beach',
			roomCount: 3,
			bathroomCount: 2,
			guestCount: 1,
			locationValue: 'HR',
			price: 500
		},
		{
			id: '2',
			title: 'title',
			description: 'description',
			imageSrc:
				'https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXRpZnVsJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww&w=1000&q=80',
			category: 'Windmills',
			roomCount: 3,
			bathroomCount: 2,
			guestCount: 1,
			locationValue: 'HR',
			price: 500
		},
		{
			id: '3',
			title: 'title',
			description: 'description',
			imageSrc:
				'https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXRpZnVsJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww&w=1000&q=80',
			category: 'Modern',
			roomCount: 3,
			bathroomCount: 2,
			guestCount: 1,
			locationValue: 'HR',
			price: 500
		},
		{
			id: '4',
			title: 'title',
			description: 'description',
			imageSrc:
				'https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXRpZnVsJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww&w=1000&q=80',
			category: 'Countryside',
			roomCount: 3,
			bathroomCount: 2,
			guestCount: 1,
			locationValue: 'HR',
			price: 500
		},
		{
			id: '5',
			title: 'title',
			description: 'description',
			imageSrc:
				'https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXRpZnVsJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww&w=1000&q=80',
			category: 'Islands',
			roomCount: 3,
			bathroomCount: 2,
			guestCount: 1,
			locationValue: 'HR',
			price: 500
		},
		{
			id: '6',
			title: 'title',
			description: 'description',
			imageSrc:
				'https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXRpZnVsJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww&w=1000&q=80',
			category: 'Lake',
			roomCount: 3,
			bathroomCount: 2,
			guestCount: 1,
			locationValue: 'HR',
			price: 500
		},
		{
			id: '7',
			title: 'title',
			description: 'description',
			imageSrc:
				'https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXRpZnVsJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww&w=1000&q=80',
			category: 'Castles',
			roomCount: 3,
			bathroomCount: 2,
			guestCount: 1,
			locationValue: 'HR',
			price: 500
		}
	];
};

export const getListingById = (params: { listingId?: string }): SafeListing | undefined => {
	const { listingId } = params;
	const listings = getListings();
	return listings.find((listing) => listing.id === listingId);
};

export const getReservations = (params: { userId?: string }): SafeReservation[] => {
	// eslint-disable-next-line no-unused-vars
	const { userId } = params;
	const user = getCurrentUser();
	const listing = getListingById({ listingId: '1' });
	if (!listing) return [];
	return [
		{
			id: '1',
			user,
			listing,
			totalPrice: 500,
			startDate: new Date().toString(),
			endDate: new Date().toString()
		}
	];
};
