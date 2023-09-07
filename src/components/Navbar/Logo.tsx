import Link from 'next/link';

export const Logo = () => {
	/* return (
		<Image
			onClick={goToHome}
			alt="Logo"
			className="hidden md:block cursor-pointer"
			height="100"
			width="100"
			src="/images/user.jpg"
		/>
	); */

	return (
		<Link href={'/'} className="py-6">
			Trip Tempo
		</Link>
	);
};
