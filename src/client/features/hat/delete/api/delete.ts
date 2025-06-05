export const deleteHat = async (hatId: number) => {
	const res = await fetch(`/api/hat/${hatId}`, { method: 'DELETE' });
	return res.json();
};
