'use client';
import { HasPermission } from '@components/HasPermission/HasPermission';
import { Button } from '@components/ui/button';
import {
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	Dialog as DialogPrimitive,
	DialogTitle,
	DialogTrigger,
} from '@components/ui/dialog';
import { Form } from './Form';
import { useState } from 'react';
export function Dialog(props: { children: React.ReactNode }) {
	const { children } = props;
	const [open, setOpen] = useState(false);
	return (
		<HasPermission permission={'hat.create'}>
			<DialogPrimitive
				open={open}
				onOpenChange={setOpen}
			>
				<DialogTrigger asChild>{children}</DialogTrigger>
				<DialogContent
					className='sm:max-w-md'
					onInteractOutside={(e) => {
						e.preventDefault();
					}}
				>
					<DialogHeader>
						<DialogTitle>Добавить шляпу</DialogTitle>
						<DialogDescription>
							Все желающие смогут купить шляпу.
						</DialogDescription>
					</DialogHeader>
					<Form onSuccess={() => setOpen(false)} />
					<DialogFooter className='sm:justify-start'>
						<DialogClose asChild>
							<Button
								type='button'
								variant='secondary'
								className='w-full'
							>
								Отмена
							</Button>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			</DialogPrimitive>
		</HasPermission>
	);
}
