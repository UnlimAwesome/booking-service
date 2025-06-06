import { Card } from '@components/ui/card';
import { Plus } from 'lucide-react';

export const Button = () => {
	return (
		<Card className='w-xs aspect-square justify-center items-center cursor-pointer hover:bg-background place-self-center'>
			<Plus size={150} />
		</Card>
	);
};
