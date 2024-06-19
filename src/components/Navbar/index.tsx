import Link from 'next/link';

import { Container } from '../Container';
import { ButtonTheme } from './ButtonTheme';
import { Button } from '@/components/ui/button';

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
							<Button asChild variant="link">
								<Link href="/auth/login">Sign In</Link>
							</Button>
						</div>
					</div>
				</Container>
			</div>
		</nav>
	);
};
