import { Button } from '@components/ui/button';
import { logout } from '../api/logout';

export function LogoutButton() {
	return <Button onClick={logout}>Выйти</Button>;
}
