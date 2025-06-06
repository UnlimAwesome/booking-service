'use client';
import { useUserStore } from '@providers/UserStoreProvider';
import { ReactNode, useMemo, useState } from 'react';

export function HasPermission(props: {
	permission: string;
	children: ReactNode;
}) {
	const { children, permission } = props;
	const permissions = useUserStore((state) => state.user?.permissions);
	const [hasPermission, setHasPermission] = useState(false);
	useMemo(() => {
		if (!permissions) return;
		setHasPermission(permissions?.includes(permission));
	}, [permissions, permission]);
	return hasPermission ? children : <></>;
}
