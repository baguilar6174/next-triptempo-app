import { AxiosError } from 'axios';

import { API } from '../lib/api';
import { type Schedule, type PaginationResponse, type SuccessResponse } from '../types';

export class SchedulesService {
	static fetchSchedules = async (
		startCityId: string,
		endCityId: string
	): Promise<SuccessResponse<PaginationResponse<Schedule[]>>> => {
		try {
			const { data } = await API.get<SuccessResponse<PaginationResponse<Schedule[]>>>('/providers', {
				params: { startCityId, endCityId }
			});
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
