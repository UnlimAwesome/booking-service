'use client';
import { createPDF } from '@/client/shared/lib/pdf/createPDF';
import { Database } from '@/server/lib/supabase/database.types';
import { Button as ButtonPrimitive } from '@components/ui/button';
import { FileDown } from 'lucide-react';
import { memo } from 'react';

interface DownloadButtonProps {
	hat: Database['public']['Tables']['hat']['Row'];
}

export const Button = memo(function Button(props: DownloadButtonProps) {
	const { hat } = props;

	return (
		<ButtonPrimitive
			variant={'secondary'}
			size={'lg'}
			onClick={async () => {
				const pdfBytes = await createPDF(JSON.stringify(hat, null, 2));
				const blob = new Blob([pdfBytes], {
					type: 'application/pdf',
				});
				const href = URL.createObjectURL(blob);
				const link = document.createElement('a');
				link.href = href;
				link.download = `${hat.name}.pdf`;
				link.click();
				URL.revokeObjectURL(href);
			}}
		>
			<FileDown />
		</ButtonPrimitive>
	);
});
