'use client';

interface MenuItemProps {
	onClick: () => void;
	label: string;
}

export const MenuItem: React.FC<MenuItemProps> = (props: MenuItemProps) => {
	const { onClick, label } = props;
	return (
		<div
			onClick={onClick}
			className="px-4 py-3 hover:bg-neutral-100 hover:text-dark transition font-semibold text-white"
		>
			{label}
		</div>
	);
};
