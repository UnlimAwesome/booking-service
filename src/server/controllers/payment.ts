import { stripe } from '../lib/stripe';
import { initSupabase } from '../lib/supabase/init';

class PaymentController {
	async createCheckoutSession(hatId: number) {
		const supabase = await initSupabase();
		const { data: hat } = await supabase
			.from('hat')
			.select('*')
			.eq('id', hatId)
			.single();
		if (!hat) return Response.redirect('/hats', 303);

		const session = await stripe.checkout.sessions.create({
			line_items: [
				{
					price_data: {
						currency: 'usd',
						product_data: {
							name: hat.name,
							description: hat.size,
						},
						unit_amount: hat.cost * 100,
					},
					quantity: 1,
				},
			],
			mode: 'payment',
			success_url: process.env.NEXT_PUBLIC_HOST + '/payment/success',
			cancel_url: process.env.NEXT_PUBLIC_HOST + '/hats',
		});

		return Response.redirect(session.url!, 303);
	}
}

export const paymentController = new PaymentController();
