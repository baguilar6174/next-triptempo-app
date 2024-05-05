import { type StateCreator, create } from 'zustand';
import { type APIError, type Schedule } from '../types';
import { devtools } from 'zustand/middleware';
import { SchedulesService } from '../services/schedules.service';

interface State {
	schedules: Schedule[];
	isLoading: boolean;
	error?: APIError;
}

interface Actions {
	// eslint-disable-next-line no-unused-vars
	fetchSchedules: (startCityId: string, endCityId: string) => Promise<void>;
}

type Store = State & Actions;

const schedulesAPI: StateCreator<Store> = (set, get) => ({
	schedules: [],
	isLoading: false,
	fetchSchedules: async (startCityId: string, endCityId: string) => {
		const state = get();
		set({ ...state, isLoading: true });
		try {
			const { data } = await SchedulesService.fetchSchedules(startCityId, endCityId);
			set({ isLoading: false, schedules: data });
		} catch (error) {
			// TODO: errors control
			set({ isLoading: false, schedules: [], error: { code: 'dfdfd', data: { error: 'F' }, message: 'Errr' } });
		}
	}
});

export const useSchedulesStore = create<Store>()(devtools(schedulesAPI));
