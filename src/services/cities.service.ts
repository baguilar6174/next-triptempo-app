import { AxiosError } from 'axios';

import { API } from '../lib/api';
import { type SuccessResponse, type PaginationResponse } from '../types';
import { type CityEntity } from '../types/city.entity';

export class CitiesService {
	static getCitites = async (): Promise<SuccessResponse<PaginationResponse<CityEntity[]>>> => {
		try {
			const { data } = await API.get<SuccessResponse<PaginationResponse<CityEntity[]>>>('/cities');
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
