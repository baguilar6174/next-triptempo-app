'use client';

interface HeadingProps {
	title: string;
	subtitle?: string;
	center?: boolean;
	className?: string;
}

export const Heading: React.FC<HeadingProps> = (props: HeadingProps) => {
	const { title, subtitle, center, className = '' } = props;

	return (
		<div className={`${className} ${center ? 'text-center' : 'text-start'}`}>
			<div className="text-2xl font-bold">{title}</div>
			<div className="font-light text-neutral-500 mt-2">{subtitle}</div>
		</div>
	);
};
