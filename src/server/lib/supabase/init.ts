import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export async function initSupabase() {
	const cookieStore = await cookies();
	return createServerClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
		{
			cookies: {
				getAll() {
					return cookieStore.getAll();
				},
				setAll(cookiesToSet) {
					try {
						cookiesToSet.forEach(({ name, value }) =>
							cookieStore.set(name, value)
						);
					} catch (e) {
						console.error(e);
					}
				},
			},
		}
	);
}
