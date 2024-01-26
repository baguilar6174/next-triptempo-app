'use client';

import React from 'react';

import { AiOutlineMenu } from 'react-icons/ai';
import { MenuItem } from './MenuItem';
import { useLoginModalStore, useRegisterModalStore } from '../../store';
import { Avatar } from '../Avatar';
import Link from 'next/link';

export const UserMenu = () => {
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
				{/* <div className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full border border-dashed  transition cursor-pointer text-light hover:text-darkNavy hover:border-darkNavy hover:border-solid">
					Test
				</div> */}
				<Link
					href={
						'https://pdd.bancor.com.ar/modo/pagar?qr=00020101021226580024ar.com.modo.decidir-plus012622NRHZ04Q0834TQF4TJM0KTC87520459695303032540576.835802AR5918Demo-MODO3-Preprod6004CABA62840308920024800522saekYLCF5gKYgXYKDVwvNZ0708920024800811TIENDA_NUBE100899999999110352280380024ar.com.modo.decidir-plus0106online81380024ar.com.modo.decidir-plus010100201063045028&callback=https%3A%2F%2Fdemomodo3.mitiendanube.com%2Fcheckout%2Fv3%2Fnext%2F1425373060%2Fb7bf332023af98587af303232a69c84efc081796&callbackSuccess=https%3A%2F%2Fdemomodo3.mitiendanube.com%2Fcheckout%2Fv3%2Fsuccess%2F1425373060%2Fb7bf332023af98587af303232a69c84efc081796'
					}
					className="text-sm font-semibold py-3 px-4 rounded-full border border-dashed  transition cursor-pointer text-light hover:text-darkNavy hover:border-darkNavy hover:border-solid"
				>
					Go to Bancor
				</Link>
				<div
					onClick={toggleOpen}
					className="p-4 md:py-1 md:px-2 boder-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
				>
					<AiOutlineMenu className="text-light" />
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
