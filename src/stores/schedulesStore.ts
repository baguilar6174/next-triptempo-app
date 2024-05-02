import { create } from 'zustand';
import axios from 'axios';

import { Schedule } from '../interfaces/schedule';
import { APIError } from '../types';

const URL = 'https://triptempo-server.up.railway.app/api/v1/providers';
// const URL = 'http://localhost:3001/api/v1/providers';

interface State {
	schedules: Schedule[];
	isLoading: boolean;
	error?: APIError;
}

interface Actions {
	// eslint-disable-next-line no-unused-vars
	fetchSchedules: (startCityId: string, endCityId: string) => void;
}

type Store = State & Actions;

export const useSchedulesStore = create<Store>((set, get) => ({
	schedules: [],
	isLoading: false,
	fetchSchedules: async (startCityId: string, endCityId: string) => {
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
			set({ isLoading: false, schedules: response.data.data.result });
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
