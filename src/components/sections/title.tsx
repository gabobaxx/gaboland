import { Flex } from 'theme-ui';
import { getIconClass } from 'utils';

type SectionTitleProps = {
	variant?: string;
	title: string;
	icon?:
		| 'star'
		| 'article'
		| 'cpu'
		| 'laptop'
		| 'yingyang'
		| 'instagram'
		| 'laptopFill';
};

const SectionTitle = ({ variant, title, icon = 'star' }: SectionTitleProps) => {
	const IconBootstrapClass = getIconClass(icon);
	return (
		<Flex
			variant={variant || 'layout.card'}
			sx={{
				gap: '8px',
				color: 'HeaderText',
				fontWeight: 'bold',
				alignItems: 'center',
			}}
		>
			<i className={IconBootstrapClass} style={{ fontSize: '18px' }}></i>
			<p>{title}</p>
		</Flex>
	);
};

export default SectionTitle;
