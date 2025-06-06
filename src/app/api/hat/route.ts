import { hatController } from '@/server/controllers/hat';

export async function POST(request: Request) {
	const hat = await request.json();
	try {
		const { data, error } = await hatController.createHat(hat);
		if (error) throw error;
		return Response.json(data);
	} catch (err) {
		return Response.json(
			{ error: (err as Error).message },
			{ status: 500 }
		);
	}
}
