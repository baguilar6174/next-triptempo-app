'use client';

import { Container } from '../Container';
import { Logo } from './Logo';
import { UserMenu } from './UserMenu';

export const Navbar = () => {
	return (
		<div className="fixed w-full bg-dark z-10 shadow-sm">
			<div className="border-b-[1px] border-dashed">
				<Container>
					<div className="flex flex-row items-center justify-between gap-3 md:gap-0 py-3">
						<Logo />
						<UserMenu />
					</div>
				</Container>
			</div>
		</div>
	);
};
