import { SelectValueBase } from '../components/Inputs/Select';

export type CitiesSelectValue = SelectValueBase & {
	region: string;
	province: string;
};
