import { AuthButton } from '@features/auth/manage';
import { ThemeSwitcher } from '@components/ThemeSwitcher/ThemeSwitcher';
import { cn } from '@/client/shared/lib/utils';
import { ScrollArea } from '@components/ui/scroll-area';
import { Github } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div
			className={cn(
				'grid grid-rows-[45px_1fr_45px] items-center ' +
					'justify-items-center h-full p-4 font-[family-name:var(--font-geist-sans)]'
			)}
		>
			<nav className='border-b border-b-foreground/10 w-full pb-2 flex'>
				<div className='ml-auto'>
					<AuthButton />
				</div>
			</nav>
			<main className='size-full'>
				<ScrollArea className='flex size-full items-center overflow-y-auto flex-grow-0 max-h-[calc(100vh-90px-32px)]'>
					{children}
				</ScrollArea>
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
