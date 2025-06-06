import { initSupabase } from '../lib/supabase/init';

class HatController {
	async deleteHat(id: number) {
		const supabase = await initSupabase();
		const { data, error } = await supabase
			.from('hat')
			.delete()
			.eq('id', id);
		return { data, error };
	}

	async createHat(hat: { name: string, color: string, size: string, cost: number }) {
		const supabase = await initSupabase();
		const { data, error } = await supabase
			.from('hat')
			.insert(hat);
		return { data, error };
	}
}
export const hatController = new HatController();
