import Image from 'next/image';

export const Avatar = () => {
	return <Image alt="Avatar" className="rounded-full" height="30" width="30" src="/images/user.jpg" />;
};
