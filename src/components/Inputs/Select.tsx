'use client';

import Select from 'react-select';

export type SelectValue = {
	label: string;
	region: string;
	province: string;
	value: number;
};

interface CountrySelectProps {
	placeholder?: string;
	value?: SelectValue;
	options: SelectValue[];
	// eslint-disable-next-line no-unused-vars
	onChange: (value: SelectValue) => void;
}

export const CustomSelect: React.FC<CountrySelectProps> = (props: CountrySelectProps) => {
	const { value, onChange, options, placeholder = '' } = props;

	return (
		<div>
			<Select
				placeholder={placeholder}
				isClearable
				id="selectbox"
				instanceId="selectbox"
				options={options}
				value={value}
				onChange={(value) => onChange(value as SelectValue)}
				formatOptionLabel={(option: any) => (
					<div className="flex flex-row items-center gap-3">
						<div>
							{option.label},<span className="text-neutral-500 ml-1">{option.province}</span>
						</div>
					</div>
				)}
				classNames={{
					control: () => 'p-3 border-2',
					input: () => 'text-lg',
					option: () => 'text-lg'
				}}
				theme={(theme) => ({
					...theme,
					borderRadius: 6,
					colors: {
						...theme.colors,
						primary: 'black',
						primary25: '#ffe4e6'
					}
				})}
			/>
		</div>
	);
};
