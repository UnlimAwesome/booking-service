import { AuthButton } from '@features/auth/manage';
import { ThemeSwitcher } from '@components/ThemeSwitcher/ThemeSwitcher';
import { cn } from '@/client/shared/lib/utils';

export default function Layout({ children }: { children: React.ReactNode }) {
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
			<main className=''>{children}</main>
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
