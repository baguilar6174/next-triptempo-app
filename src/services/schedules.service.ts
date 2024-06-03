import { AxiosError } from 'axios';

import { API } from '../lib/api';
import { type PaginationResponse, type SuccessResponse } from '../types';
import { type ProviderEntity } from '../types/provider.entity';

export class SchedulesService {
	static fetchSchedules = async (
		startCityId: string,
		endCityId: string
	): Promise<SuccessResponse<PaginationResponse<ProviderEntity[]>>> => {
		try {
			const { data } = await API.get<SuccessResponse<PaginationResponse<ProviderEntity[]>>>('/providers', {
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
