import { hatController } from '@/server/controllers/hatController';

export async function DELETE(
	request: Request,
	{ params }: { params: Promise<{ id: number }> }
) {
	const { id } = await params;

	const res = hatController.deleteHat(id);
	return Response.json(res);
}
