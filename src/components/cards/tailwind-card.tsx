import { HTMLAttributes } from 'react';

export default function TailwindCard(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			{...props}
			className={`w-full min-h-52 md:min-h-96 mx-auto p-6 border-2 border-gray-200 rounded-[1.25rem] ${
				props.className ?? ''
			}`}
		/>
	);
}
