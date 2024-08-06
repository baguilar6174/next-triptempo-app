import { AxiosError } from 'axios';

import { API, AppError, type City, type SuccessResponse } from '../core';

export class CitiesService {
	static getCitites = async (): Promise<SuccessResponse<City[]>> => {
		try {
			const { data } = await API.get<SuccessResponse<City[]>>('/cities');
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

	static getCity = async (id: string): Promise<SuccessResponse<City>> => {
		try {
			const { data } = await API.get<SuccessResponse<City>>(`/cities/${id}`);
			return data;
		} catch (error) {
			if (error instanceof AxiosError) {
				// TODO: improve error control
				// eslint-disable-next-line no-unsafe-optional-chaining
				const { name, message, validationErrors } = error.response?.data;
				throw new AppError({ name, message, validationErrors });
			}
			throw AppError.internalServer('Server error in get city');
		}
	};
}
