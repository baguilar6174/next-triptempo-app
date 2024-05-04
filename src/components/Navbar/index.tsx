'use client';

import Link from 'next/link';

import { Container } from '../Container';
import { useLoginModalStore, useRegisterModalStore } from '../../stores';

export const Navbar = (): JSX.Element => {
	const registerOnOpen = useRegisterModalStore((state) => state.onOpen);
	const loginOnOpen = useLoginModalStore((state) => state.onOpen);

	return (
		<div className="fixed w-full z-10 shadow-sm">
			<div className="border-b-[1px] border-dashed">
				<Container>
					<div className="flex flex-row items-center justify-between gap-3 md:gap-0 py-3">
						<Link href={'/'} className="hover:text-light">
							Trip Tempo
						</Link>
						<div onClick={loginOnOpen} className="px-4 py-3 transition font-semibold">
							Login
						</div>
						<div onClick={registerOnOpen} className="px-4 py-3 transition font-semibold">
							Register
						</div>
					</div>
				</Container>
			</div>
		</div>
	);
};
