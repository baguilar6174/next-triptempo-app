import { create } from 'zustand';
import axios from 'axios';

const URL = '/api/admin';

interface AdminStore {
	isLoading: boolean;
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
		const response = await axios.post(URL, params);
		console.log(response);
		set({ isLoading: false });
	}
}));
