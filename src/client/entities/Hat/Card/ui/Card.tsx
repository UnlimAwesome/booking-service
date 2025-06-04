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
				<CardTitle>{hat.name}</CardTitle>
				<CardDescription>{hat.size}</CardDescription>
			</CardHeader>
			<CardContent className='flex items-center justify-center'>
				<svg
					width='100px'
					height='100px'
					viewBox='0 0 512 512'
					fill={hat.color}
				>
					<g>
						<path
							d='M511.883,298.395c-2.781-27.281-54.391-46.141-129.406-51.844c-7.172-42.047-15.469-90.563-17.891-103.75
		c-5.563-30.203-45.344-47.094-74.891-25.313c-15.5,11.422-29.359,12.234-36.703,12.234s-15.5,1.625-36.703-12.234
		c-30.719-20.094-69.328-4.891-74.875,25.313c-2.969,16.109-14.688,84.844-22.391,130.203
		C45.211,293.817-2.711,323.114,0.117,350.723c4.25,41.625,122.266,63.671,263.578,49.218
		C405.039,385.488,516.148,340.036,511.883,298.395z M132.289,308.348l8.156-42.406c0,0,145.188,22.828,226.75-19.578l8.156,35.891
		C375.352,282.254,287.258,337.708,132.289,308.348z'
						/>
					</g>
				</svg>
			</CardContent>
			<CardFooter className='flex-col gap-2'>
				<Button
					type='submit'
					className='w-full'
				>
					Купить за {hat.cost}$
				</Button>
			</CardFooter>
		</CardPrimitive>
	);
}
