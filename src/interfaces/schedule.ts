export interface Schedule {
	id: number;
	schedules: string[];
	name: string;
	logo: string | null;
	details: string | null;
	estimatedTravelTime: number;
	distance: number;
	price: number;
}
