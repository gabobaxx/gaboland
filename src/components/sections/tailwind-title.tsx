import { HTMLAttributes } from 'react';

export default function TailwindSectionTitle(
	props: HTMLAttributes<HTMLDivElement>
) {
	return (
		<div
			{...props}
			className={`${
				props.className ?? ''
			} flex gap-2 p-4 bg-extra-checks rounded-3xl `}
		/>
	);
}
