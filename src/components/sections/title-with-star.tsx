import { StarIcon } from '@heroicons/react/24/solid';
import TailwindSectionTitle from './tailwind-title';
import { HTMLAttributes } from 'react';

export default function TitleWithStarIcon(
	props: HTMLAttributes<HTMLDivElement>
) {
	return (
		<TailwindSectionTitle
			{...props}
			className={`${props.className ?? ''} rounded-full text-primary-700`}
		>
			<StarIcon className="h-4 w-4 md:h-6 md:w-62 text-xs md:text-base" />
			<p className="font-bold text-xs md:text-base">{props.children}</p>
		</TailwindSectionTitle>
	);
}
