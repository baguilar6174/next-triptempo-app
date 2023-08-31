'use client';

import React from 'react';

import { AiOutlineMenu } from 'react-icons/ai';
import { Avatar } from '../Avatar';
import { MenuItem } from './MenuItem';
import { User } from '../../interfaces/user';
import { useLoginModalStore, useRegisterModalStore } from '../../store';

interface UserMenuProps {
	currentUser?: User;
}

export const UserMenu: React.FC<UserMenuProps> = (props: UserMenuProps) => {
	const { currentUser } = props;

	const registerModalStore = useRegisterModalStore();
	const loginModalStore = useLoginModalStore();

	const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

	const toggleOpen = React.useCallback(() => {
		setIsMenuOpen((value) => !value);
	}, []);

	return (
		<div className="relative">
			<div className="flex flex-row items-center gap-3">
				<div
					onClick={() => {}}
					className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
				>
					your home
				</div>
				<div
					onClick={toggleOpen}
					className="p-4 md:py-1 md:px-2 boder-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
				>
					<AiOutlineMenu />
					<div className="hidden md:block">
						<Avatar />
					</div>
				</div>
			</div>
			{isMenuOpen && (
				<div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm ">
					<div className="flex flex-col cursor-pointer">
						{currentUser ? (
							<React.Fragment>
								<MenuItem onClick={() => {}} label="My trips" />
								<MenuItem onClick={() => {}} label="My favorites" />
								<MenuItem onClick={() => {}} label="My reservations" />
								<MenuItem onClick={() => {}} label="My home" />
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
