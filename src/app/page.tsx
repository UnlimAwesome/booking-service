import { AuthButton } from '@/client/features/Auth/AuthButton/ui/AuthButton';
import { ThemeSwitcher } from '@/client/shared/components/ThemeSwitcher/ThemeSwitcher';
import { Button } from '@/client/shared/components/ui/button';
import { cn } from '@/client/shared/lib/utils';
import { Yeseva_One } from 'next/font/google';
import Link from 'next/link';

const yesevaOne = Yeseva_One({ weight: '400', subsets: ['cyrillic'] });
export default function Home() {
	return (
		<div
			className={cn(
				'grid grid-rows-[45px_1fr_45px] items-center ' +
					'justify-items-center min-h-screen p-4 gap-16 font-[family-name:var(--font-geist-sans)]'
			)}
		>
			<nav className='border-b border-b-foreground/10 w-full pb-2 flex'>
				<div className='ml-auto'>
					<AuthButton />
				</div>
			</nav>
			<main className='flex size-full items-end justify-center p-28'>
				<div className='flex flex-col gap-8 h-full'>
					<h1
						className={cn(
							yesevaOne.className,
							'bg-clip-text text-transparent bg-linear-[90deg,purple_0%,fuchsia_30%,HotPink_50%,sandybrown_70%,mediumorchid_90%,purple_100%]',
							'text-9xl text-left animate-gradient-text bg-[200%,auto]'
						)}
					>
						КУПИ, МУЖИК
						<br />
						ШЛЯПУ
					</h1>
					<h2
						className={cn(
							yesevaOne.className,
							'text-foreground text-7xl text-left'
						)}
					>
						БУДЕТ КАК РАЗ
					</h2>
				</div>
				<Button
					variant={'link'}
					className={cn(yesevaOne.className, 'h-auto text-6xl ')}
					asChild
				>
					<Link href='/hats'>Купить</Link>
				</Button>
			</main>
			<footer className='w-full flex items-center justify-center gap-4 border-t pt-2'>
				<p>
					Powered by{' '}
					<a
						href='https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs'
						target='_blank'
						className='font-bold hover:underline'
						rel='noreferrer'
					>
						Supabase
					</a>
				</p>
				<ThemeSwitcher />
			</footer>
		</div>
	);
}
