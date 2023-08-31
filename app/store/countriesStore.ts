const options = [
	{
		value: 'Value',
		label: 'label',
		region: 'region'
	}
];

export const useCountriesStore = () => {
	const getAll = () => options;
	const getByValue = (value: string) => {
		return options.find((option) => option.value === value);
	};
	return {
		getAll,
		getByValue
	};
};
