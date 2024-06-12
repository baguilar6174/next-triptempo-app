import { AxiosError } from 'axios';

import { API, AppError, type PaginationResponseEntity, type CityEntity, type SuccessResponse } from '../core';

export class CitiesService {
	static getCitites = async (): Promise<SuccessResponse<PaginationResponseEntity<CityEntity[]>>> => {
		try {
			const { data } = await API.get<SuccessResponse<PaginationResponseEntity<CityEntity[]>>>('/cities');
			return data;
		} catch (error) {
			if (error instanceof AxiosError) {
				// TODO: improve error control
				// eslint-disable-next-line no-unsafe-optional-chaining
				const { name, message, validationErrors } = error.response?.data;
				throw new AppError({ name, message, validationErrors });
			}
			throw AppError.internalServer('Server error in get cities');
		}
	};
}
