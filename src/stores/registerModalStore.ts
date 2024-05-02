import { create } from 'zustand';

interface State {
	isOpen: boolean;
}

interface Actions {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

type Store = State & Actions;

export const useRegisterModalStore = create<Store>(
	(set): Store => ({
		isOpen: false,
		onOpen: (): void => {
			set({ isOpen: true });
		},
		onClose: (): void => {
			set({ isOpen: false });
		}
	})
);
