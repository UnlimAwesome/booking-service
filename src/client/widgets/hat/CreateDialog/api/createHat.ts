export async function createHat(data: {
	name: string;
	color: string;
	size: string;
	cost: number;
}) {
	const response = await fetch('/api/hat', {
		method: 'POST',
		body: JSON.stringify(data),
	});
	return await response.json();
}
