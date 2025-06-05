export async function getUserPermissions() {
	const data = await fetch('/api/auth/user', {
		method: 'GET',
		cache: 'no-cache',
		credentials: 'include',
	});
	const json = await data.json();
	return json;
}
