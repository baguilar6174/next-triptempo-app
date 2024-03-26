'use client';

import Select, { FormatOptionLabelMeta } from 'react-select';

export type SelectValueBase = {
	label: string;
	value: number | string;
};

interface CustomSelectProps {
	placeholder?: string;
	value?: SelectValueBase;
	options: SelectValueBase[];
	// eslint-disable-next-line no-unused-vars
	onChange: (value: SelectValueBase) => void;
	// eslint-disable-next-line no-unused-vars
	formatOptionLabel?: (data: any, formatOptionLabelMeta: FormatOptionLabelMeta<SelectValueBase>) => React.ReactNode;
}

export const CustomSelect: React.FC<CustomSelectProps> = (props: CustomSelectProps) => {
	const defaultFormatOptionLabel = (option: SelectValueBase) => (
		<div className="flex flex-row items-center gap-3 text-light">
			<div>{option.label}</div>
		</div>
	);

	const { value, onChange, options, formatOptionLabel = defaultFormatOptionLabel, placeholder = '' } = props;

	return (
		<div>
			<Select
				placeholder={placeholder}
				isClearable
				id="selectbox"
				instanceId="selectbox"
				options={options}
				value={value}
				onChange={(value) => onChange(value as SelectValueBase)}
				formatOptionLabel={formatOptionLabel}
				classNames={{
					control: () => 'p-3',
					input: () => 'text-lg',
					option: () => 'text-lg'
				}}
				theme={(theme) => ({
					...theme,
					borderRadius: 6,
					colors: {
						...theme.colors
					}
				})}
				styles={{
					control: (baseStyles, state) => ({
						...baseStyles,
						backgroundColor: 'transparent',
						borderColor: state.isFocused ? '#38D6FE' : 'white',
						borderRadius: '2',
						borderStyle: 'dashed'
					}),
					option: (baseStyles, { isFocused }) => ({
						...baseStyles,
						backgroundColor: isFocused ? 'gray' : '#272325'
					})
				}}
			/>
		</div>
	);
};
