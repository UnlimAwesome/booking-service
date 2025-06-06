import { userController } from '@/server/controllers/user';

export async function GET() {
	return Response.json(await userController.getUser());
}
