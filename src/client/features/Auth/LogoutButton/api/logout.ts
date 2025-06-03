'use server';
import { initSupabase } from '@/server/lib/supabase/init';
import { redirect } from 'next/navigation';

export async function logout() {
	const supabase = await initSupabase();
	await supabase.auth.signOut();
	redirect('/auth/sign-in');
}
