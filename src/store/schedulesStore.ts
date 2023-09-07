import { create } from 'zustand';
import axios from 'axios';

import { Schedule } from '../interfaces/schedule';

const URL = '/api/schedules';

interface SchedulesStore {
	schedules: Schedule[];
	isLoading: boolean;
	// eslint-disable-next-line no-unused-vars
	fetchSchedules: (startCityId: number, endCityId: number) => void;
}

export const useSchedulesStore = create<SchedulesStore>((set, get) => ({
	schedules: [],
	isLoading: false,
	fetchSchedules: async (startCityId: number, endCityId: number) => {
		const state = get();
		set({
			...state,
			isLoading: true
		});
		const response = await axios.get(URL, {
			params: {
				startCityId,
				endCityId
			}
		});
		set({ isLoading: false, schedules: response.data });
	}
}));
