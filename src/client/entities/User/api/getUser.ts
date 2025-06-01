'use server';
import { initSupabase } from '@/server/lib/supabase/init';
export async function getUser() {
	const supabase = await initSupabase();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	return user;
}
