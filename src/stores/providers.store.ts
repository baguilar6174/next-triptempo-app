import { type StateCreator, create } from 'zustand';
import { type APIError } from '../types';
import { devtools } from 'zustand/middleware';
import { ProvidersService } from '../services/providers.service';
import { type ProviderEntity } from '../types/provider.entity';

interface State {
	providers?: ProviderEntity[];
	isLoading: boolean;
	error?: APIError;
}

interface Actions {
	fetchProviders: (startCityId: string, endCityId: string) => Promise<void>;
}

type Store = State & Actions;

const providersAPI: StateCreator<Store> = (set, get) => ({
	providers: undefined,
	isLoading: false,
	fetchProviders: async (startCityId: string, endCityId: string) => {
		const state = get();
		set({ ...state, isLoading: true });
		try {
			const { result } = await ProvidersService.fetchProviders(startCityId, endCityId);
			set({ isLoading: false, providers: result.data });
		} catch (error) {
			// TODO: errors control
			set({ isLoading: false, providers: [], error: { code: 'dfdfd', data: { error: 'F' }, message: 'Errr' } });
		}
	}
});

export const useProvidersStore = create<Store>()(devtools(providersAPI));
