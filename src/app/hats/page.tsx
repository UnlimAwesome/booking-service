import { CreateButton } from '@features/hat/create';
import { initSupabase } from '@/server/lib/supabase/init';
import { HatCard } from '@widgets/hat/Card/ui/Card';
import { CreateDialog } from '@widgets/hat/CreateDialog';

export default async function Page() {
	const supabase = await initSupabase();
	const { data, error } = await supabase.from('hat').select();
	return (
		<div className='size-full grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-8 p-2 md:p-8 after:content-[""] after:flex-grow'>
			{data?.map((hat) => (
				<HatCard
					key={hat.id}
					hat={hat}
				/>
			))}
			<CreateDialog>
				<CreateButton />
			</CreateDialog>
			{error && <p>{error.message}</p>}
		</div>
	);
}
