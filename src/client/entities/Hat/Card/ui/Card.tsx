import { Database } from '@/server/lib/supabase/database.types';
import { initSupabase } from '@/server/lib/supabase/init';
import { Button } from '@components/ui/button';
import {
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	Card as CardPrimitive,
	CardTitle,
} from '@components/ui/card';
import { DownloadButton } from './DownloadButton';
import { HatIcon } from './HatIcon';
interface CardProps {
	hat: Database['public']['Tables']['hat']['Row'];
}

export async function HatCard(props: CardProps) {
	const supabase = await initSupabase();
	const data = await supabase.auth.getSession();
	console.log(data);
	const { hat } = props;
	return (
		<CardPrimitive className='w-xs h-xs'>
			<CardHeader>
				<CardTitle>
					<div className='flex justify-between items-center'>
						{hat.name}
						<div>
							<DownloadButton hat={hat} />
						</div>
					</div>
				</CardTitle>
				<CardDescription>{hat.size}</CardDescription>
			</CardHeader>
			<CardContent className='flex items-center justify-center'>
				<HatIcon fill={hat.color} />
			</CardContent>
			<CardFooter className='flex-col gap-2'>
				<Button className='w-full'>Купить за {hat.cost}$</Button>
			</CardFooter>
		</CardPrimitive>
	);
}
