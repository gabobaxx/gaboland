import { Flex } from 'theme-ui';
import { getIconClass } from 'utils';

type SectionTitleProps = {
	title: string;
	icon?: 'star' | 'article' | 'cpu';
};

const SectionTitle = ({ title, icon = 'star' }: SectionTitleProps) => {
	const IconBootstrapClass = getIconClass(icon);
	return (
		<Flex
			variant="layout.card"
			sx={{
				gap: '8px',
				color: 'P900',
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
