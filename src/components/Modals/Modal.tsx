'use client';

import React from 'react';
import { Button } from '../ui/button';
import { THREE_HUNDRED } from '../../constants';

interface ModalProps {
	onClose: () => void;
	onSubmit: () => void;
	actionLabel: string;
	isOpen?: boolean;
	title?: string;
	body?: React.ReactElement;
	footer?: React.ReactElement;
	disabled?: boolean;
	secondaryAction?: () => void;
	secondaryActionLabel?: string;
}

export const Modal: React.FC<ModalProps> = (props: ModalProps) => {
	const {
		onClose,
		onSubmit,
		actionLabel,
		isOpen,
		title,
		body,
		footer,
		disabled,
		secondaryAction,
		secondaryActionLabel
	} = props;

	const [showModal, setShowModal] = React.useState<boolean | undefined>(isOpen);

	const handleClose = React.useCallback(() => {
		if (disabled) return;
		setShowModal(false);
		setTimeout(() => {
			onClose();
		}, THREE_HUNDRED);
	}, [disabled, onClose]);

	const handleSubmit = React.useCallback(() => {
		if (disabled) return;
		onSubmit();
	}, [disabled, onSubmit]);

	const handleSecondaryAction = React.useCallback(() => {
		if (disabled ?? !secondaryAction) return;
		secondaryAction();
	}, [disabled, secondaryAction]);

	React.useEffect(() => {
		setShowModal(isOpen);
	}, [isOpen]);

	if (!isOpen) return null;

	return (
		<React.Fragment>
			<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-noe focus:outline-none bg-neutral-800/70">
				<div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
					{/* Content */}
					<div
						className={`translate duration-300 h-full ${showModal ? 'translate-y-0' : 'translate-y-full'} ${
							showModal ? 'opacity-100' : 'opacity-0'
						}`}
					>
						<div className="translate h-full lg:h-auto md:h-auto border rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
							{/* Header */}
							<div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
								<button onClick={handleClose} className="p-1 border-0 hover:opacity-70 transition absolute left-9">
									X
								</button>
								<div className="text-lg font-semibold text-light">{title}</div>
							</div>
							{/* Body */}
							<div className="relative p-6 flex-auto">{body}</div>
							{/* Footer */}
							<div className="flex flex-col gap-2 p-6">
								<div className="flex flex-row items-center gap-4 w-full">
									{secondaryAction && secondaryActionLabel && (
										<Button disabled={disabled} onClick={handleSecondaryAction}>
											{secondaryActionLabel}
										</Button>
									)}
									<Button disabled={disabled} onClick={handleSubmit}>
										{actionLabel}
									</Button>
								</div>
								{footer}
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};
