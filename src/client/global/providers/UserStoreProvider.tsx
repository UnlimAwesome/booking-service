'use client';

import { createContext, ReactNode, useContext, useEffect, useRef } from 'react';
import { createUserStore, UserStore } from '../store/userStore';
import { useStore } from 'zustand';
import { getUserPermissions } from '@/client/entities/User/api/getUserPermissions';

export type UserStoreApi = ReturnType<typeof createUserStore>;

export const UserStoreContext = createContext<UserStoreApi | undefined>(
	undefined
);

export const UserStoreProvider = ({ children }: { children: ReactNode }) => {
	const storeRef = useRef<UserStoreApi | null>(null);
	if (storeRef.current === null) storeRef.current = createUserStore();

	useEffect(() => {
		(async () => {
			storeRef.current?.setState({ user: await getUserPermissions() });
		})();
	}, []);

	return (
		<UserStoreContext.Provider value={storeRef.current}>
			{children}
		</UserStoreContext.Provider>
	);
};

export const useUserStore = <T,>(selector: (store: UserStore) => T): T => {
	const store = useContext(UserStoreContext);
	if (!store) {
		throw new Error('useUserStore must be used within a UserStoreProvider');
	}
	return useStore(store, selector);
};
