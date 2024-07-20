import { HTMLAttributes } from 'react';

export default function TailwindCard(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			{...props}
			className={`w-full rounded-3xl min-h-52 md:min-h-96 mx-auto p-6 border-2 border-gray-200 ${
				props.className ?? ''
			}`}
		/>
	);
}
