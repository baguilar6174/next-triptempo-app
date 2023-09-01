import { create } from 'zustand';

interface SearchModalStore {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

export const useSearchModalStore = create<SearchModalStore>(
	(set): SearchModalStore => ({
		isOpen: false,
		onOpen: (): void => set({ isOpen: true }),
		onClose: (): void => set({ isOpen: false })
	})
);
