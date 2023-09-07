import { create } from 'zustand';

interface RegisterModalStore {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

export const useRegisterModalStore = create<RegisterModalStore>(
	(set): RegisterModalStore => ({
		isOpen: false,
		onOpen: (): void => set({ isOpen: true }),
		onClose: (): void => set({ isOpen: false })
	})
);
