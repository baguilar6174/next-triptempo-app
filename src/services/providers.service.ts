import { AxiosError } from 'axios';

import { API } from '../core/config/axios.adapter';
import { type SuccessResponse } from '../types';
import { type ProviderEntity } from '../types/provider.entity';
import { type PaginationResponseEntity } from '../types/paginationResponse.entity';

export class ProvidersService {
	static fetchProviders = async (
		startCityId: string,
		endCityId: string
	): Promise<SuccessResponse<PaginationResponseEntity<ProviderEntity[]>>> => {
		try {
			const { data } = await API.get<SuccessResponse<PaginationResponseEntity<ProviderEntity[]>>>('/providers', {
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
