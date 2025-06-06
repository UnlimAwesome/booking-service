import { HatCard } from '@widgets/hat/Card/ui/Card';
import { initSupabase } from '@/server/lib/supabase/init';

export default async function Page() {
	const supabase = await initSupabase();
	const { data, error } = await supabase.from('hat').select();
	console.log(await supabase.auth.getUser());
	return (
		<div className='flex size-full items-center justify-center'>
			<div className='w-full flex gap-8'>
				{data?.map((hat) => (
					<HatCard
						key={hat.id}
						hat={hat}
					/>
				))}
				{error && <p>{error.message}</p>}
			</div>
		</div>
	);
}
