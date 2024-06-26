import Link from 'next/link';

import { Container } from '../Container';
import { ButtonTheme } from './ButtonTheme';

export const Navbar = (): JSX.Element => {
	return (
		<nav className="bg-white dark:bg-black fixed w-full z-10 shadow-sm">
			<div className="border-b border-dashed">
				<Container>
					<div className="flex flex-row items-center justify-between gap-3 md:gap-0 py-3">
						<Link href={'/'} className="hover:text-light">
							Trip Tempo
						</Link>
						<div className="flex">
							<ButtonTheme />
						</div>
					</div>
				</Container>
			</div>
		</nav>
	);
};
