import { Link as RLink } from '@remix-run/react';
import { Flex, Link } from 'theme-ui';
import { getIconClass } from 'utils';

import CustomLink from 'components/links';

type BadgeProps = {
	to?: string;
	href?: string;
	icon?: string;
	title?: string;
	color?: {
		background: string;
		font: string;
	};
	hover?: { background: string; color: string };
};
const Badge = ({
	href,
	to = '/',
	icon = 'star',
	title = 'Developer',
	hover = { background: '', color: '' },
	color = { background: 'P900', font: 'GS100' },
}: BadgeProps) => {
	const IconBootstrapClass = getIconClass(icon);
	return (
		<Flex
			variant="layout.badge"
			sx={{
				color: color.font,
				backgroundColor: color.background,
				':hover': { backgroundColor: hover.background, color: hover.color },
			}}
		>
			<i className={IconBootstrapClass}></i>
			{href ? (
				<Link
					as="a"
					href={href}
					target="_blank"
					sx={{ ':hover': { color: hover.color } }}
				>
					{title}
				</Link>
			) : (
				<CustomLink
					to={to}
					as={RLink}
					sx={{ ':hover': { color: hover.color } }}
				>
					{title}
				</CustomLink>
			)}
		</Flex>
	);
};

export default Badge;
