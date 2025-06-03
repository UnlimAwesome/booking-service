import { initSupabase } from '@/server/lib/supabase/init';

export default async function Page() {
	const supabase = await initSupabase();
	const { data, error } = await supabase.from('hat').select();
	console.log(await supabase.auth.getUser());
	return (
		<div className='flex size-full items-center justify-center'>
			<div className='w-full max-w-sm'>
				<ul>
					<table className='w-full table-auto'>
						<thead>
							<tr>
								{data?.[0] &&
									Object.keys(data[0]).map((key) => (
										<th key={key}>{key}</th>
									))}
							</tr>
						</thead>
						<tbody>
							{data?.map((hat) => (
								<tr key={hat.id}>
									{Object.values(hat).map((value) => (
										<td key={String(value)}>
											{String(value)}
										</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
					{error?.message}
				</ul>
			</div>
		</div>
	);
}
