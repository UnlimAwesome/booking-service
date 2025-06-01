'use client';

import { createClient } from '@/client/shared/lib/supabase/createClient';
import { cn } from '@/client/shared/lib/utils';
import { Button } from '@components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@components/ui/card';
import { Input } from '@components/ui/input';
import { Label } from '@components/ui/label';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ComponentPropsWithoutRef, useState } from 'react';

export function LoginForm({
	className,
	...props
}: ComponentPropsWithoutRef<'div'>) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		const supabase = createClient();
		setIsLoading(true);
		setError(null);

		try {
			const { error } = await supabase.auth.signInWithPassword({
				email,
				password,
			});
			if (error) throw error;
			// Update this route to redirect to an authenticated route. The user already has an active session.
			router.push('/protected');
		} catch (error: unknown) {
			setError(
				error instanceof Error ? error.message : 'An error occurred'
			);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div
			className={cn('flex flex-col gap-6', className)}
			{...props}
		>
			<Card>
				<CardHeader>
					<CardTitle className='text-2xl'>Авторизация</CardTitle>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleLogin}>
						<div className='flex flex-col gap-6'>
							<div className='grid gap-2'>
								<Label htmlFor='email'>Email</Label>
								<Input
									id='email'
									type='email'
									placeholder='mail@example.com'
									required
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className='grid gap-2'>
								<div className='flex items-center'>
									<Label htmlFor='password'>Пароль</Label>
									<Link
										href='/auth/forgot-password'
										className='ml-auto inline-block text-sm underline-offset-4 hover:underline'
									>
										Забыли пароль?
									</Link>
								</div>
								<Input
									id='password'
									type='password'
									required
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>
							</div>
							{error && (
								<p className='text-sm text-red-500'>{error}</p>
							)}
							<Button
								type='submit'
								className='w-full'
								disabled={isLoading}
							>
								{isLoading ? 'Вход...' : 'Войти'}
							</Button>
						</div>
						<div className='mt-4 text-center text-sm'>
							У Вас еще нет аккаунта?{' '}
							<Link
								href='/auth/sign-up'
								className='underline underline-offset-4'
							>
								Зарегистрироваться
							</Link>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
