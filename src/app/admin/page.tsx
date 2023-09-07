import React from 'react';
import getTransportProviders from '../../actions/transportProviders';
import { AdminClient } from './components/AdminClient';
import getCities from '../../actions/cities';

export default async function AdminPage() {
	const providers = await getTransportProviders();
	const cities = await getCities();

	return <AdminClient providers={providers} cities={cities} />;
}
