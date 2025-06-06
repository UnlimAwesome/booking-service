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

	//TODO: connect with ui
	async createHat(name: string) {
		const supabase = await initSupabase();
		const { data, error } = await supabase
			.from('hat')
			.insert({ name: name });
		return { data, error };
	}
}
export const hatController = new HatController();
