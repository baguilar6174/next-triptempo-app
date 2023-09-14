import { create } from 'zustand';
import axios from 'axios';

import { Schedule } from '../interfaces/schedule';
import { APIError } from '../types';

const URL = '/api/schedules';

interface SchedulesStore {
	schedules: Schedule[];
	isLoading: boolean;
	error?: APIError;
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
		try {
			const response = await axios.get(URL, {
				params: {
					startCityId,
					endCityId
				}
			});
			set({ isLoading: false, schedules: response.data });
		} catch (error) {
			if (axios.isAxiosError(error)) {
				const { message, response, code } = error;
				set({
					...state,
					isLoading: false,
					error: {
						code,
						data: response?.data,
						message
					}
				});
			} else {
				console.error(error);
			}
		}
	}
}));
