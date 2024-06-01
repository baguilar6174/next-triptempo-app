import { AxiosError } from 'axios';

import { API } from '../lib/api';
import { type SuccessResponse, type City, type PaginationResponse } from '../types';

export class CitiesService {
	static getCitites = async (): Promise<SuccessResponse<PaginationResponse<City[]>>> => {
		try {
			const { data } = await API.get<SuccessResponse<PaginationResponse<City[]>>>('/cities');
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
