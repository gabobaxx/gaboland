import { capitalize } from 'utils';
import { SocialLinks as links } from 'config';
import Badge from 'components/badges/badge-link';

import type { AvailableIcons } from 'types';

type SocialLinksBadgesProps = {
	hidden?: {
		render?: string[];
		responsive?: string;
	};
};
export const SocialLinksBadges = ({
	hidden,
}: SocialLinksBadgesProps): JSX.Element => {
	const socialToHide = hidden?.responsive ?? 'none';
	const render = hidden?.render ?? ['none'];
	return (
		<>
			{Object.entries(links)
				.filter((link) => render.find((string) => link[0] !== string))
				.map((link) => (
					<Badge
						key={link[1]}
						href={link[1]}
						title={capitalize(link[0])}
						icon={link[0] as AvailableIcons}
						color={{ background: 'GS100', font: 'P800' }}
						hover={{ background: 'GS100', color: 'primary' }}
						sx={{
							'@media screen and (max-width: 500px)': {
								display: link[0] === socialToHide ? 'none' : '',
							},
						}}
					/>
				))}
		</>
	);
};
