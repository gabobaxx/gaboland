import { HTMLAttributes } from 'react';

export default function TailwindSectionTitle(
	props: HTMLAttributes<HTMLDivElement>
) {
	return (
		<div
			{...props}
			className={`flex gap-2 p-6 bg-extra-checks rounded-3xl ${
				props.className ?? ''
			}`}
		/>
	);
}
