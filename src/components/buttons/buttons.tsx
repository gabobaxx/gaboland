import { AnchorHTMLAttributes } from 'react';
import { Link } from '@remix-run/react';

export function OutlineLink(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
	return (
		<Link
			{...props}
			to={props.href ?? '/'}
			className={`w-full py-2.5 px-5 bg-transparent rounded-lg font-bold text-sm border border-white text-white hover:bg-grayscale-100 hover:text-primary-500 focus:outline-none focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-grayscale-800 dark:text-grayscale-100 dark:hover:text-white dark:hover:bg-extra-dark dark:hover:border-grayscale-800 ${
				props.className ?? ''
			}`}
		>
			{props.children}
		</Link>
	);
}
