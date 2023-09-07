export interface Schedule {
	id: number;
	schedules: string[];
	transportationProvider: string;
	transportationProviderLogo: string | null;
	transportationProviderDetails: string | null;
	estimatedTravelTime: number;
	distance: number;
	price: number;
}
