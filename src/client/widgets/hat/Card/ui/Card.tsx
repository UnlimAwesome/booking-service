import { Database } from '@/server/lib/supabase/database.types';
import { HatIcon } from '@components/HatIcon/HatIcon';
import {
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	Card as CardPrimitive,
	CardTitle,
} from '@components/ui/card';
import { DeleteButton } from '@features/hat/delete';
import { DownloadButton } from '@features/hat/download';
import { OrderButton } from '@features/hat/order';

interface CardProps {
	hat: Database['public']['Tables']['hat']['Row'];
}

export async function HatCard(props: CardProps) {
	const { hat } = props;
	return (
		<CardPrimitive className='w-xs aspect-square justify-self-center'>
			<CardHeader>
				<CardTitle>
					<div className='flex justify-between items-center'>
						{hat.name}
						<div className='flex gap-2'>
							<DownloadButton hat={hat} />
							<DeleteButton hatId={hat.id} />
						</div>
					</div>
				</CardTitle>
				<CardDescription>{hat.size}</CardDescription>
			</CardHeader>
			<CardContent className='flex items-center justify-center'>
				<HatIcon fill={hat.color} />
			</CardContent>
			<CardFooter className='flex-col gap-2'>
				<OrderButton hat={hat} />
			</CardFooter>
		</CardPrimitive>
	);
}
