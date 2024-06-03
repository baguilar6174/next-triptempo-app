import { type StateCreator, create } from 'zustand';
import { type APIError } from '../types';
import { devtools } from 'zustand/middleware';
import { SchedulesService } from '../services/schedules.service';
import { type ProviderEntity } from '../types/provider.entity';

interface State {
	providers?: ProviderEntity[];
	isLoading: boolean;
	error?: APIError;
}

interface Actions {
	fetchSchedules: (startCityId: string, endCityId: string) => Promise<void>;
}

type Store = State & Actions;

const schedulesAPI: StateCreator<Store> = (set, get) => ({
	schedules: undefined,
	isLoading: false,
	fetchSchedules: async (startCityId: string, endCityId: string) => {
		const state = get();
		set({ ...state, isLoading: true });
		try {
			const { result } = await SchedulesService.fetchSchedules(startCityId, endCityId);
			set({ isLoading: false, providers: result.data });
		} catch (error) {
			// TODO: errors control
			set({ isLoading: false, providers: [], error: { code: 'dfdfd', data: { error: 'F' }, message: 'Errr' } });
		}
	}
});

export const useSchedulesStore = create<Store>()(devtools(schedulesAPI));
