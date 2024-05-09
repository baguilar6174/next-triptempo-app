import { AxiosError } from 'axios';
import { API } from '../lib/api';
import { type City, type PaginationResponse } from '../types';

export class CitiesService {
	static getCitites = async (): Promise<PaginationResponse<City[]>> => {
		try {
			const { data } = await API.get<PaginationResponse<City[]>>('/cities');
			return data;
		} catch (error) {
			if (error instanceof AxiosError) {
				console.log(error.response?.data);
			}
			console.log(error);
			throw new Error('Service error get');
		}
	};
}
