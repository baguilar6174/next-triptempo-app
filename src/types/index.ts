export interface APIError<Data = Record<string, string>> {
	// TODO: validate api error type
	code: string | undefined;
	message: string;
	data: Data;
}

export interface SuccessResponse<T> {
	result: T;
}

export interface PaginationResponse<T> {
	data: T;
	currentPage: number;
	nextPage: number | null;
	prevPage: number | null;
	total: number;
	totalPages: number;
}
