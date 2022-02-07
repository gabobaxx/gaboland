/** @jsx jsx */
import { Link as GLink } from 'gatsby';
import { Flex, jsx, Link } from 'theme-ui';
import Navigation from '@lekoarts/gatsby-theme-emma/src/components/navigation';

type PageTitleProps = {
	nav: boolean;
	title: string;
};
const PageTitle = ({ nav, title }: PageTitleProps) => (
	<Flex
		sx={{
			flex: 1,
			fontSize: 20,
			justifyContent: nav ? 'center' : 'flex-start',
		}}
	>
		<Link
			to="/" // ! Typescript problem
			aria-label={`${title}, Back to homepage`}
			as={GLink}
			sx={{
				color: 'p700',
				':hover': { color: 'p300', textDecoration: 'none' },
			}}
		>
			{title}
		</Link>
	</Flex>
);

type HeaderProps = {
	title?: string;
	meta: {
		[key: string]: string;
	};
	nav: {
		title: string;
		slug: string;
	}[];
};
const Header = ({ meta, nav, title }: HeaderProps) => {
	const { siteTitle } = meta;
	const navEmpty = nav.length === 0;

	return (
		<Flex
			as="header"
			variant="layout.header"
			sx={{
				fontFamily: 'head',
				fontWeight: 'bold',
			}}
		>
			<PageTitle nav={navEmpty} title={title || siteTitle} />
			{/* Menu Links */}
			<Flex
				sx={{
					ml: 1,
					order: 4,
					display: 'flex',
					justifyContent: 'flex-end',
					a: {
						fontSize: 10,
						color: 'p700',
						display: 'flex',
						alignItems: 'center',
						'&:hover': {
							color: 'p300',
							textDecoration: 'none',
						},
						'a:not(:last-of-type)': {
							mr: 2,
						},
						'&:not(:first-of-type)': {
							ml: 1,
						},
					},
				}}
			>
				{!navEmpty && <Navigation nav={nav} />}
			</Flex>
		</Flex>
	);
};

export default Header;
