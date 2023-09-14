import { SelectValueBase } from '../components/Inputs/Select';

export type CitiesSelectValue = SelectValueBase & {
	region: string;
	province: string;
};

export type APIError<Data = Record<string, string>> = {
	code: string | undefined;
	message: string;
	data: Data;
};
