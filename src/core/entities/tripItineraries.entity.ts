import { type ScheduleEntity } from './schedule.entity';

export class TripItineraryEntity {
	constructor(
		public id: string,
		public name: string,
		public logo: string | null,
		public details: string | null,
		public estimatedTravelTime: number,
		public distance: number,
		public price: number,
		public schedules: ScheduleEntity[]
	) {}
}
