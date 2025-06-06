import { paymentController } from '@/server/controllers/payment';

export async function GET(
	request: Request,
	{ params }: { params: Promise<{ hatId: number }> }
) {
	const { hatId } = await params;

	return await paymentController.createCheckoutSession(hatId);
}
