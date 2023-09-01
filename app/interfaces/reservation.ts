import { SafeListing } from './listing';
import { SafeUser } from './user';
export interface SafeReservation {
	id: string;
	user: SafeUser;
	listing: SafeListing;
	totalPrice: number;
	startDate: string;
	endDate: string;
}
