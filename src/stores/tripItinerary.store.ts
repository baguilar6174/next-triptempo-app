import { type StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { TripItinerariesService } from '../services/providers.service';

import { type ErrorResponse, type TripItineraryEntity } from '../core';

interface State {
	tripItineraries?: TripItineraryEntity[];
	isLoading: boolean;
	error?: ErrorResponse;
}

interface Actions {
	getTripItineraries: (startCityId: string, endCityId: string) => Promise<void>;
}

type Store = State & Actions;

const tripItinerariesAPI: StateCreator<Store> = (set, get) => ({
	tripItineraries: undefined,
	isLoading: false,
	getTripItineraries: async (startCityId: string, endCityId: string) => {
		const state = get();
		set({ ...state, isLoading: true });
		try {
			const { result } = await TripItinerariesService.getTripItineraries(startCityId, endCityId);
			set({ isLoading: false, tripItineraries: result.data });
		} catch (error) {
			set({ isLoading: false, tripItineraries: [], error: error as ErrorResponse });
		}
	}
});

export const useTripItinerariesStore = create<Store>()(devtools(tripItinerariesAPI));
