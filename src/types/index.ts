export interface ValidationType {
	fields: string[];
	constraint: string;
}

export interface APIError<Data = Record<string, string>> {
	// TODO: validate api error type
	code: string | undefined;
	message: string;
	data: Data;
}

export interface SuccessResponse<T> {
	result: T;
}
