export interface Schedule {
	id: number;
	schedules: string[];
	transportationProvider: string;
	estimatedTravelTime: number;
	distance: number;
	price: number;
}
