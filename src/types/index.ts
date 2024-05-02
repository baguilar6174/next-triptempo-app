import { type SelectValueBase } from '../components/Inputs/Select';

export type CitiesSelectValue = SelectValueBase & {
	region: string;
	province: string;
};

export interface APIError<Data = Record<string, string>> {
	// TODO: validate api error type
	code: string | undefined;
	message: string;
	data: Data;
}

export interface City {
	id: string;
	name: string;
	province: string;
	region: string;
}

export interface Schedule {
	id: number;
	schedules: string[];
	name: string;
	logo: string | null;
	details: string | null;
	estimatedTravelTime: number;
	distance: number;
	price: number;
}

export interface PaginationResponse<T> {
	data: T;
	currentPage: number;
	nextPage: number | null;
	prevPage: number | null;
	total: number;
	totalPages: number;
}
