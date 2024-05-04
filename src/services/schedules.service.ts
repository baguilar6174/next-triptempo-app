import { AxiosError } from 'axios';
import { API } from '../lib/api';
import { type Schedule, type PaginationResponse } from '../types';

export class SchedulesService {
	static fetchSchedules = async (startCityId: string, endCityId: string): Promise<PaginationResponse<Schedule[]>> => {
		try {
			const { data } = await API.get<PaginationResponse<Schedule[]>>('/providers', {
				params: { startCityId, endCityId }
			});
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
