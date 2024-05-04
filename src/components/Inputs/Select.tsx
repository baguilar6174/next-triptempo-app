'use client';

import { useTheme } from 'next-themes';
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
	const { theme } = useTheme();

	const defaultFormatOptionLabel = (option: SelectValueBase): JSX.Element => (
		<div className="flex flex-row items-center gap-3 text-light">{option.label}</div>
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
					control: () => '',
					input: () => 'text-lg',
					option: () => 'text-lg'
				}}
				styles={{
					option: (defaultStyles, { isFocused, isSelected }) => {
						return {
							...defaultStyles,
							backgroundColor: isSelected
								? 'hsl(var(--background))'
								: isFocused
									? 'hsl(var(--accent))'
									: 'hsl(var(--background))',
							color: theme === 'light' ? 'black' : 'white',
							':active': {
								...defaultStyles[':active'],
								backgroundColor: 'hsl(var(--accent))'
							}
						};
					},
					control: (defaultStyles) => ({
						...defaultStyles,
						// Notice how these are all CSS properties
						backgroundColor: 'hsl(var(--background))',
						padding: '',
						border: '1px solid hsl(var(--input))',
						boxShadow: 'none'
					}),
					singleValue: (defaultStyles) => ({ ...defaultStyles, color: theme === 'light' ? 'black' : 'white' })
				}}
				// theme={(theme) => ({
				// 	...theme,
				// 	borderRadius: 0,
				// 	colors: {
				// 		...theme.colors,
				// 		primary25: 'hotpink',
				// 		primary: 'black'
				// 	}
				// })}
				// styles={{
				// 	control: (baseStyles, state) => ({
				// 		...baseStyles,
				// 		backgroundColor: 'transparent',
				// 		borderColor: state.isFocused ? '#38D6FE' : 'white',
				// 		borderRadius: '2'
				// 	}),
				// 	option: (baseStyles, { isFocused }) => ({
				// 		...baseStyles,
				// 		backgroundColor: isFocused ? 'black' : '#272325'
				// 	})
				// }}
			/>
		</div>
	);
};
