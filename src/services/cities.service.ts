import { AxiosError } from 'axios';

import { API } from '../core/config/axios.adapter';
import { type SuccessResponse } from '../types';
import { type CityEntity } from '../types/city.entity';
import { type PaginationResponseEntity } from '../types/paginationResponse.entity';
import { AppError } from '../core/errors';

export class CitiesService {
	static getCitites = async (): Promise<SuccessResponse<PaginationResponseEntity<CityEntity[]>>> => {
		try {
			const { data } = await API.get<SuccessResponse<PaginationResponseEntity<CityEntity[]>>>('/cities');
			return data;
		} catch (error) {
			if (error instanceof AxiosError) {
				console.log(error.response?.data);
			}
			throw AppError.internalServer('Service error get cities');
		}
	};
}
