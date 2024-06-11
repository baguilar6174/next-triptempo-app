import { AxiosError } from 'axios';

import { API, AppError, type PaginationResponseEntity, type CityEntity, type SuccessResponse } from '../core';

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
