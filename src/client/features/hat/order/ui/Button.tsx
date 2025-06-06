'use client';
import { HasPermission } from '@components/HasPermission/HasPermission';
import { Button as ButtonPrimitive } from '@components/ui/button';
import { Database } from '@/server/lib/supabase/database.types';
import { memo } from 'react';
import Link from 'next/link';

export const Button = memo(function Button(props: {
	hat: Database['public']['Tables']['hat']['Row'];
}) {
	const { hat } = props;

	return (
		<HasPermission permission={'hat.order'}>
			<ButtonPrimitive
				asChild
				className='w-full'
			>
				<Link href={`/api/payment/create-checkout-session/${hat.id}`}>
					Купить за {hat.cost}$
				</Link>
			</ButtonPrimitive>
		</HasPermission>
	);
});
