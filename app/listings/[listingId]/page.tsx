import EmptyState from '../../components/EmptyState';
import { getCurrentUser, getListingById } from '../../data/mock';
import { ListingClient } from './ListingClient';

interface IParams {
	listingId?: string;
}

export default function ListingPage({ params }: { params: IParams }) {
	const listing = getListingById(params);
	const currentUser = getCurrentUser();
	if (!listing) return <EmptyState />;
	return <ListingClient listing={listing} currentUser={currentUser} />;
}
