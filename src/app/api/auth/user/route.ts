import { userController } from '@/server/controllers/userController';

export async function GET() {
	return Response.json(await userController.getUser());
}
