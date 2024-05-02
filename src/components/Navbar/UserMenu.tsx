'use client';

import React from 'react';

import { MenuItem } from './MenuItem';
import { useLoginModalStore, useRegisterModalStore } from '../../stores';
import { Avatar } from '../Avatar';

export const UserMenu = (): JSX.Element => {
	const registerModalStore = useRegisterModalStore();
	const loginModalStore = useLoginModalStore();
	const currentUser = false;

	const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

	const toggleOpen = React.useCallback(() => {
		setIsMenuOpen((value) => !value);
	}, []);

	return (
		<div className="relative">
			<div className="flex flex-row items-center gap-3">
				<div className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full border border-dashed  transition cursor-pointer text-light hover:text-darkNavy hover:border-darkNavy hover:border-solid">
					Test
				</div>
				<div
					onClick={toggleOpen}
					className="p-4 md:py-1 md:px-2 boder-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
				>
					Menu
					<div className="hidden md:block">
						<Avatar />
					</div>
				</div>
			</div>
			{isMenuOpen && (
				<div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-dark border border-dashed overflow-hidden right-0 top-12 text-sm ">
					<div className="flex flex-col cursor-pointer">
						{currentUser ? (
							<React.Fragment>
								<MenuItem onClick={() => {}} label="My trips" />
								<MenuItem onClick={() => {}} label="My favorites" />
								<MenuItem onClick={() => {}} label="My reservations" />
								<hr />
								<MenuItem onClick={() => {}} label="Logout" />
							</React.Fragment>
						) : (
							<React.Fragment>
								<MenuItem onClick={loginModalStore.onOpen} label="Login" />
								<MenuItem onClick={registerModalStore.onOpen} label="Sign up" />
							</React.Fragment>
						)}
					</div>
				</div>
			)}
		</div>
	);
};
