'use client';
import { Button as ButtonPrimitive } from '@components/ui/button';
import { LoaderCircle, Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { memo, useState } from 'react';
import { deleteHat } from '../api/delete';
import { HasPermission } from '@components/HasPermission/HasPermission';

export const Button = memo(function Button(props: { hatId: number }) {
	const { hatId } = props;
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	return (
		<HasPermission permission={'hat.deleteOwn'}>
			<ButtonPrimitive
				disabled={loading}
				variant={'destructive'}
				size={'icon'}
				onClick={async () => {
					// eslint-disable-next-line @typescript-eslint/no-unused-vars
					setLoading((prev) => true);
					const { error } = await deleteHat(hatId);
					if (!error) {
						router.refresh();
						// eslint-disable-next-line @typescript-eslint/no-unused-vars
						setLoading((prev) => false);
					}
				}}
			>
				{loading ? (
					<LoaderCircle className='animate-spin' />
				) : (
					<Trash />
				)}
			</ButtonPrimitive>
		</HasPermission>
	);
});
