import Image from 'next/image';

export const Avatar = (): JSX.Element => {
	return <Image alt="Avatar" className="rounded-full" height="30" width="30" src="/images/user.jpg" />;
};
