'use client';

import Select, { type FormatOptionLabelMeta } from 'react-select';

export interface SelectValueBase {
	label: string;
	value: number | string;
}

interface CustomSelectProps {
	placeholder?: string;
	value?: SelectValueBase;
	options: SelectValueBase[];
	// eslint-disable-next-line no-unused-vars
	onChange: (value: SelectValueBase) => void;
	// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-explicit-any
	formatOptionLabel?: (data: any, formatOptionLabelMeta: FormatOptionLabelMeta<SelectValueBase>) => React.ReactNode;
}

export const CustomSelect: React.FC<CustomSelectProps> = (props: CustomSelectProps) => {
	const defaultFormatOptionLabel = (option: SelectValueBase): JSX.Element => (
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
				onChange={(value) => {
					// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
					onChange(value!);
				}}
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
						// borderColor: state.isFocused ? '#38D6FE' : 'white',
						borderRadius: '2',
						borderStyle: 'dashed'
					}),
					option: (baseStyles, { isFocused }) => ({
						...baseStyles
						// backgroundColor: isFocused ? 'gray' : '#272325'
					})
				}}
			/>
		</div>
	);
};
