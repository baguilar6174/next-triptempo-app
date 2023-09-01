import React from 'react';
import { IconType } from 'react-icons';

interface CategoryViewProps {
	icon: IconType;
	label: string;
	description: string;
}

export const ListingCategory: React.FC<CategoryViewProps> = (props: CategoryViewProps) => {
	const { icon: Icon, label, description } = props;
	return (
		<div className="flex flex-col gap-6">
			<div className="flex flex-row items-center gap-4">
				<Icon size={40} className="text-neutral-600" />
				<div className="flex flex-col">
					<div className="text-lg font-semibold">{label}</div>
					<div className="text-neutral-500 font-light">{description}</div>
				</div>
			</div>
		</div>
	);
};
