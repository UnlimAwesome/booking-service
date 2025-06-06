'use client';

import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { Label } from '@components/ui/label';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';
import { createHat } from '../api/createHat';

export const Form = (props: { onSuccess: () => void }) => {
	const { onSuccess } = props;
	const router = useRouter();
	const [data, setData] = useState({
		name: '',
		color: '',
		size: '',
		cost: 0,
	});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		setLoading((prev) => true);
		e.preventDefault();
		const res = await createHat(data);
		if (!res?.error) {
			router.refresh();
			onSuccess();
		} else {
			setError(res.error.message);
		}
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		setLoading((prev) => false);
	};

	return (
		<form
			className='flex flex-col items-center gap-6'
			onSubmit={handleFormSubmit}
		>
			<div className='flex flex-col gap-2 w-full'>
				<Label
					htmlFor='name'
					className='w-full text-left'
				>
					Название
				</Label>
				<Input
					required
					type='text'
					name='name'
					id='name'
					placeholder="pretty boy's hat"
					onChange={(e) =>
						setData((prev) => ({ ...prev, name: e.target.value }))
					}
				/>
				<Label
					htmlFor='color'
					className='w-full text-left'
				>
					Цвет
				</Label>
				<Input
					required
					type='text'
					name='color'
					placeholder='red or valid hex color'
					id='color'
					onChange={(e) =>
						setData((prev) => ({ ...prev, color: e.target.value }))
					}
				/>
				<Label
					htmlFor='size'
					className='w-full text-left'
				>
					Размер
				</Label>
				<Input
					required
					type='text'
					name='size'
					placeholder='small/medium/large'
					id='size'
					onChange={(e) =>
						setData((prev) => ({ ...prev, size: e.target.value }))
					}
				/>
				<Label
					htmlFor='cost'
					className='w-full text-left'
				>
					Цена
				</Label>
				<Input
					required
					type='number'
					name='cost'
					id='cost'
					min={0.01}
					step={0.01}
					placeholder='0.01'
					max={1000}
					onChange={(e) =>
						setData((prev) => ({
							...prev,
							cost: e.target.valueAsNumber,
						}))
					}
				/>
			</div>
			{error && <p className='text-red-500'>{error}</p>}
			<Button
				className='w-full'
				type='submit'
				disabled={loading}
			>
				{loading ? 'Добавление...' : 'Добавить'}
			</Button>
		</form>
	);
};
