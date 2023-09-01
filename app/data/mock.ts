import { SafeListing } from '../interfaces/listing';
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
			bathroomCOunt: 2,
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
			bathroomCOunt: 2,
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
			bathroomCOunt: 2,
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
			bathroomCOunt: 2,
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
			bathroomCOunt: 2,
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
			bathroomCOunt: 2,
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
			bathroomCOunt: 2,
			guestCount: 1,
			locationValue: 'HR',
			price: 500
		}
	];
};
