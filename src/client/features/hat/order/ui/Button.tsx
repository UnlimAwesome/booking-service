'use client';
import { HasPermission } from '@components/HasPermission/HasPermission';
import { Button as ButtonPrimitive } from '@components/ui/button';
import { Database } from '@/server/lib/supabase/database.types';
import { memo } from 'react';

export const Button = memo(function Button(props: {
	hat: Database['public']['Tables']['hat']['Row'];
}) {
	const { hat } = props;

	return (
		<HasPermission permission={'hat.order'}>
			<ButtonPrimitive className='w-full'>
				Купить за {hat.cost}$
			</ButtonPrimitive>
		</HasPermission>
	);
});
