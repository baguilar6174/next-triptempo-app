import EmptyState from '../components/EmptyState';
import { getCurrentUser, getReservations } from '../data/mock';
import { TripsClient } from './TripsClient';

export default function TripsPage() {
	const currentUser = getCurrentUser();
	const reservations = getReservations({ userId: currentUser.id });

	if (!currentUser) return <EmptyState title="Unauthorized" subtitle="Please login" />;
	if (reservations.length === 0) {
		return <EmptyState title="No trips found" subtitle="Looks like you havent reserved any trips." />;
	}

	return <TripsClient reservations={reservations} currentUser={currentUser} />;
}
