import { HTMLAttributes } from 'react';

export default function TailwindCard(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			{...props}
			className={`max-w-sm min-h-52 p-6 bg-transparent border-2 border-gray-200 rounded-[1.25rem] ${
				props.className ?? ''
			}`}
		/>
	);
}
