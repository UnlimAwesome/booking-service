'use client';
import { Button as ButtonPrimitive } from '@components/ui/button';
import { Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { memo } from 'react';
import { deleteHat } from '../api/delete';
import { HasPermission } from '@components/HasPermission/HasPermission';

export const Button = memo(function Button(props: { hatId: number }) {
	const { hatId } = props;
	const router = useRouter();
	return (
		<HasPermission permission={'hat.deleteOwn'}>
			<ButtonPrimitive
				variant={'destructive'}
				size={'lg'}
				onClick={async () => {
					const { error } = await deleteHat(hatId);
					if (!error) router.refresh();
				}}
			>
				<Trash />
			</ButtonPrimitive>
		</HasPermission>
	);
});
