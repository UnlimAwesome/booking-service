import { Database } from '../lib/supabase/database.types';
import { initSupabase } from '../lib/supabase/init';

class UserController {
	async getUser() {
		const supabase = await initSupabase();
		const {
			data: { user },
		} = await supabase.auth.getUser();

		if (!user) throw new Error('User not found');
		const { data } = await supabase
			.from('user_roles')
			.select('*')
			.eq('user_id', user?.id);
		if (!data) return;

		const { user_id: userId, role: userRole } = data[0];
		const { data: userPermissionsRows } = await supabase
			.from('role_permissions')
			.select('*')
			.eq('role', userRole!);
		const userPermissions = (
			userPermissionsRows as Database['public']['Tables']['role_permissions']['Row'][]
		)?.map((permission) => permission.permission);
		return { id: userId, role: userRole, permissions: userPermissions };
	}
}

export const userController = new UserController();
