import { HTMLAttributes } from 'react';

export default function TailwindSectionTitle(
	props: HTMLAttributes<HTMLDivElement>
) {
	return (
		<div
			{...props}
			className={`${
				props.className ?? ''
			} flex gap-2 p-4 rounded-3xl bg-extra-checks dark:bg-grayscale-900 dark:text-white`}
		/>
	);
}
