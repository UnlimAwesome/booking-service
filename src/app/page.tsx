import { cn } from '@/client/shared/lib/utils';
import { ThemeSwitcher } from '@components/ThemeSwitcher/ThemeSwitcher';
import { Button } from '@components/ui/button';
import { AuthButton } from '@features/auth/manage';
import { Github } from 'lucide-react';
import { Yeseva_One } from 'next/font/google';
import Link from 'next/link';

const yesevaOne = Yeseva_One({ weight: '400', subsets: ['cyrillic'] });
export default function Home() {
	return (
		<div
			className={cn(
				'grid grid-rows-[45px_1fr_45px] items-center ' +
					'justify-items-center min-h-screen p-4 gap-2 md:gap-16 font-[family-name:var(--font-geist-sans)]'
			)}
		>
			<nav className='border-b border-b-foreground/10 w-full pb-2 flex'>
				<div className='ml-auto'>
					<AuthButton />
				</div>
			</nav>
			<main className='flex flex-col size-full items-start justify-evenly py-10 p-4 md:p-28'>
				{/* <div className='flex flex-col gap-8 h-full w-full'> */}
				<h1
					className={cn(
						yesevaOne.className,
						'bg-clip-text text-transparent bg-linear-[90deg,purple_0%,fuchsia_30%,HotPink_50%,sandybrown_70%,mediumorchid_90%,purple_100%]',
						'md:text-9xl text-left animate-gradient-text bg-[200%,auto] text-7xl '
					)}
				>
					КУПИ, МУЖИК
					<br />
					ШЛЯПУ
				</h1>
				<h2
					className={cn(
						yesevaOne.className,
						'text-foreground text-3xl text-left md:text-7xl'
					)}
				>
					БУДЕТ КАК РАЗ
				</h2>
				{/* </div> */}
				<Button
					variant={'link'}
					className={cn(
						yesevaOne.className,
						'h-auto md:text-6xl text-3xl self-end'
					)}
					asChild
				>
					<Link href='/hats'>Купить</Link>
				</Button>
			</main>
			<footer className='w-full flex items-center justify-center gap-4 border-t pt-2'>
				<p className='flex gap-2 align-bottom'>
					<a
						href='https://github.com/UnlimAwesome/booking-service'
						target='_blank'
						className='hover:underline'
						rel='noreferrer'
					>
						Github
					</a>
					<Github
						size={16}
						className='self-center'
					/>
				</p>
				<ThemeSwitcher />
			</footer>
		</div>
	);
}
