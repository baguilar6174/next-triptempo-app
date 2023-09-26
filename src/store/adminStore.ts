import { create } from 'zustand';
import axios from 'axios';
import { APIError } from '../types';

const URL = '/api/admin';

interface AdminStore {
	isLoading: boolean;
	error?: APIError;
	// eslint-disable-next-line no-unused-vars
	createRoute: (params: any) => void;
}

export const useAdminStore = create<AdminStore>((set, get) => ({
	isLoading: false,
	createRoute: async (params: any) => {
		const state = get();
		set({
			...state,
			isLoading: true
		});
		try {
			const response = await axios.post(URL, params);
			console.log(response);
			// TODO: return data and show success alert
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
		} finally {
			set({
				...state,
				isLoading: true
			});
		}
	}
}));
