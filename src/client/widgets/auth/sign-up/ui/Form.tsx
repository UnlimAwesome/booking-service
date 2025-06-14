'use client';

import { Switch } from '@components/ui/switch';
import { createClient } from '@/client/shared/lib/supabase/createClient';
import { cn } from '@/client/shared/lib/utils';
import { Button } from '@components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@components/ui/card';
import { Input } from '@components/ui/input';
import { Label } from '@components/ui/label';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function Form({
	className,
	...props
}: React.ComponentPropsWithoutRef<'div'>) {
	const [role, setRole] = useState('customer');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const handleSignUp = async (e: React.FormEvent) => {
		e.preventDefault();
		const supabase = createClient();
		setIsLoading(true);
		setError(null);

		if (password !== repeatPassword) {
			setError('Passwords do not match');
			setIsLoading(false);
			return;
		}

		try {
			const { error } = await supabase.auth.signUp({
				email,
				password,
				options: {
					emailRedirectTo: `${window.location.origin}/hats`,
					data: {
						role,
					},
				},
			});
			if (error) throw error;
			router.push('/auth/sign-up-success');
		} catch (error: unknown) {
			setError(
				error instanceof Error ? error.message : 'Произошла ошибка'
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
					<CardTitle className='text-2xl'>Регистрация</CardTitle>
					<CardDescription>Создайте аккаунт </CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSignUp}>
						<div className='flex flex-col gap-6'>
							<div className='flex items-center space-x-2'>
								<Label htmlFor='airplane-mode'>
									Пользователь
								</Label>
								<Switch
									id='airplane-mode'
									checked={role === 'admin'}
									onCheckedChange={(checked) =>
										setRole(checked ? 'admin' : 'customer')
									}
								/>
								<Label htmlFor='airplane-mode'>Админ</Label>
							</div>
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
							<div className='grid gap-2'>
								<div className='flex items-center'>
									<Label htmlFor='repeat-password'>
										Повторите пароль
									</Label>
								</div>
								<Input
									id='repeat-password'
									type='password'
									required
									value={repeatPassword}
									onChange={(e) =>
										setRepeatPassword(e.target.value)
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
								{isLoading
									? 'Создание аккаунта...'
									: 'Зарегистрироваться'}
							</Button>
						</div>
						<div className='mt-4 text-center text-sm'>
							Уже есть аккаунт?{' '}
							<Link
								href='/auth/sign-in'
								className='underline underline-offset-4'
							>
								Войти
							</Link>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
