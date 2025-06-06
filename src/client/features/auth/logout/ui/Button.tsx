import { Button as ButtonPrimitive } from '@components/ui/button';
import { logout } from '../api/logout';

export function Button() {
	return <ButtonPrimitive onClick={logout}>Выйти</ButtonPrimitive>;
}
