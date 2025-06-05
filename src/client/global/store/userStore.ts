import { getUserPermissions } from '@/client/entities/User/api/getUserPermissions';
import { devtools } from 'zustand/middleware';
import { createStore } from 'zustand/vanilla';

export interface User {
	id: string;
	role: string;
	permissions: string[];
}

export interface UserStore {
	user: User | undefined;
	setUser: () => Promise<void>;
}

export function createUserStore() {
	return createStore<UserStore>()(
		devtools((set) => ({
			user: undefined,
			setUser: async () => set({ user: await getUserPermissions() }),
		}))
	);
}
