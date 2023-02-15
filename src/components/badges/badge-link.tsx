// * Third Party
import { getIconClass } from 'utils';
import { Flex, Link } from 'theme-ui';
import { Link as RLink } from '@remix-run/react';
// * Custom
import CustomLink from 'components/links';
// * Interfaces/Types
import type { AvailableIcons } from 'types';
import type { ThemeUIStyleObject } from 'theme-ui';

type BadgeProps = {
	to?: string;
	href?: string;
	title?: string;
	icon?: AvailableIcons;
	color?: {
		background: string;
		font: string;
	};
	sx?: ThemeUIStyleObject | undefined;
	hover?: { background: string; color: string };
};
const Badge = ({
	sx,
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
				...sx,
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
