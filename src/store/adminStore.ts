import { create } from 'zustand';
import axios from 'axios';

const URL = '/api/admin';

export type APIError<Data = Record<string, string>> = {
	code: string | undefined;
	message: string;
	data: Data;
};

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
		} catch (error) {
			if (axios.isAxiosError(error)) {
				const { message, response, code } = error;
				console.log(error);
				set({
					...state,
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
			set({ isLoading: false });
		}
	}
}));
