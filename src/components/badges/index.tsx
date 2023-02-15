import { Box } from 'theme-ui';
import type { AvailableIcons } from 'types';
import { getIconClass } from 'utils';

type BadgeProps = {
	icon?: string;
	title?: string;
	variant?: string;
	color?: {
		background: string;
		font: string;
	};
	hover?: { background: string; color: string };
};
const Badge = ({
	icon = 'star',
	title = 'Developer',
	variant = 'layout.badge',
	hover = { background: '', color: '' },
	color = { background: 'P900', font: 'GS100' },
}: BadgeProps) => {
	const IconBootstrapClass = getIconClass(icon as AvailableIcons);
	return (
		<Box
			variant={variant}
			sx={{
				color: color.font,
				backgroundColor: color.background,
				':hover': { backgroundColor: hover.background, color: hover.color },
			}}
		>
			<i className={IconBootstrapClass}></i>
			<p>{title}</p>
		</Box>
	);
};

export default Badge;
