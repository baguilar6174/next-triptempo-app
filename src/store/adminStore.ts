import { create } from 'zustand';
import axios from 'axios';
import { APIError } from '../types';
import { AdminFormValues } from '../app/admin/components/AdminClient';

const URL = '/api/admin';

interface AdminStore {
	isLoading: boolean;
	error?: APIError;
	message?: string;
	// eslint-disable-next-line no-unused-vars
	createRoute: (params: AdminFormValues) => void;
}

export const useAdminStore = create<AdminStore>((set, get) => ({
	isLoading: false,
	createRoute: async (params: AdminFormValues) => {
		const state = get();
		set({
			...state,
			isLoading: true
		});
		try {
			await axios.post(URL, params);
			set({
				...state,
				isLoading: false,
				message: 'Ruta creada correctamente'
			});
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
