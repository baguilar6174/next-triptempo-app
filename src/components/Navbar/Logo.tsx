import Link from 'next/link';

export const Logo = () => {
	return (
		<Link href={'/'} className="text-darkNavy hover:text-light">
			Trip Tempo
		</Link>
	);
};
