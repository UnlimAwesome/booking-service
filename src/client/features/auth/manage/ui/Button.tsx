import { Button as ButtonPrimitive } from '@components/ui/button';
import Link from 'next/link';
import { getUser } from '@/client/entities/User/api/getUser';
import { LogoutButton } from '../../logout';

export async function Button() {
	const user = await getUser();
	return user ? (
		<div className='flex items-center gap-4'>
			Привет, {user.email}!
			<LogoutButton />
		</div>
	) : (
		<div className='flex gap-2'>
			<ButtonPrimitive
				asChild
				size='sm'
				variant={'outline'}
			>
				<Link href='/auth/sign-in'>Войти</Link>
			</ButtonPrimitive>
			<ButtonPrimitive
				asChild
				size='sm'
				variant={'default'}
			>
				<Link href='/auth/sign-up'>Зарегистрироваться</Link>
			</ButtonPrimitive>
		</div>
	);
}
