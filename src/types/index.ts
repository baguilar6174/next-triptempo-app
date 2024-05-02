import { type SelectValueBase } from '../components/Inputs/Select';

export type CitiesSelectValue = SelectValueBase & {
	region: string;
	province: string;
};

export interface APIError<Data = Record<string, string>> {
	code: string | undefined;
	message: string;
	data: Data;
}
