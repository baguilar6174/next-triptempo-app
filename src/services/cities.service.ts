import { AxiosError } from 'axios';
import { API } from '../api/tripTempo.api';
import { type City, type PaginationResponse } from '../types';

export class CitiesService {
	static getCitites = async (): Promise<PaginationResponse<City[]>> => {
		try {
			const { data } = await API.get<PaginationResponse<City[]>>('/cities');
			return data;
		} catch (error) {
			if (error instanceof AxiosError) {
				console.log(error.response?.data);
				// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
				throw new Error(error.response?.data);
			}
			console.log(error);
			throw new Error('Service error get');
		}
	};
}
