export interface Auth {
	user: {
		id: string;
		name: string;
		email: string;
	};
	token: string;
}

export interface Province {
	id: string;
	name: string;
}

export interface City {
	id: string;
	name: string;
	province: string;
	region: string;
}

export interface Schedule {
	id: number;
	departureTime: string;
}

export interface TripItinerary {
	id: string;
	name: string;
	logo: string | null;
	details: string | null;
	estimatedTravelTime: number;
	distance: number;
	price: number;
	schedules: Schedule[];
}
