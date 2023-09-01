import EmptyState from '../components/EmptyState';
import { getCurrentUser, getReservations } from '../data/mock';
import { TripsClient } from '../trips/TripsClient';

export default function ReservationsPage() {
	const currentUser = getCurrentUser();
	const reservations = getReservations({ userId: currentUser.id });

	if (!currentUser) return <EmptyState title="Unauthorized" subtitle="Please login" />;

	if (reservations.length === 0) {
		return (
			<EmptyState title="No reservations found" subtitle="Looks like you have no reservations on your properties." />
		);
	}

	return <TripsClient reservations={reservations} currentUser={currentUser} />;
}
