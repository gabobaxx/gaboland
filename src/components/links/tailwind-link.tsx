import { AnchorHTMLAttributes } from 'react';
import { Link as RLink } from '@remix-run/react';

export default function Link(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
	return (
		<RLink
			to={props.href ?? '/'}
			{...props}
			className={`text-primary-700 dark:text-grayscale-100 hover:text-primary-300 dark:hover:text-primary-300 ${
				props.className ?? ''
			}`}
		/>
	);
}
