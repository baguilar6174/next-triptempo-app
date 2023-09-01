import { Container } from './components/Container';
import EmptyState from './components/EmptyState';
import { ListingCard } from './components/Listings/ListingCard';
import { getCurrentUser, getListings } from './data/mock';

export default function Home() {
	const currentUser = getCurrentUser();
	const listings = getListings();

	if (listings.length === 0) return <EmptyState showReset />;

	return (
		<main>
			<Container>
				<div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
					{listings.map((listing) => {
						return <ListingCard key={listing.id} data={listing} currentUser={currentUser} />;
					})}
				</div>
			</Container>
		</main>
	);
}
