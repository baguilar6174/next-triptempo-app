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
			<h2 className="text-light text-2xl uppercase font-bold">{title}</h2>
			<div className="font-light text-light mt-5">{subtitle}</div>
		</div>
	);
};
