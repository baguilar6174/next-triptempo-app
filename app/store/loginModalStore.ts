import { create } from 'zustand';

interface LoginModalStore {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

export const useLoginModalStore = create<LoginModalStore>(
	(set): LoginModalStore => ({
		isOpen: false,
		onOpen: (): void => set({ isOpen: true }),
		onClose: (): void => set({ isOpen: false })
	})
);
