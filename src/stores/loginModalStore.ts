import { create } from 'zustand';

interface State {
	isOpen: boolean;
}

interface Actions {
	onOpen: () => void;
	onClose: () => void;
}

type Store = State & Actions;

export const useLoginModalStore = create<Store>(
	(set): Store => ({
		isOpen: false,
		onOpen: (): void => set({ isOpen: true }),
		onClose: (): void => set({ isOpen: false })
	})
);
