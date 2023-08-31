import { create } from 'zustand';

interface RentModalStore {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

export const useRentModalStore = create<RentModalStore>(
	(set): RentModalStore => ({
		isOpen: false,
		onOpen: (): void => set({ isOpen: true }),
		onClose: (): void => set({ isOpen: false })
	})
);
