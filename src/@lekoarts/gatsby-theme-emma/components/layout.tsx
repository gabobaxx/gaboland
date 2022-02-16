import * as React from 'react';
// Hooks!
import useSiteMetadata from '@lekoarts/gatsby-theme-emma/src/hooks/use-site-metadata';
import useNavigation from '@lekoarts/gatsby-theme-emma/src/hooks/use-navigation';
// Components!
import Header from './header';
import Footer from '@lekoarts/gatsby-theme-emma/src/components/footer';
import Seo from './seo';

type LayoutProps = {
	children: React.ReactNode;
	header?: { title?: string };
};

const Layout = ({ children, header = {} }: LayoutProps) => {
	const nav = useNavigation();
	const meta = useSiteMetadata();
	const title = header.title || '';

	return (
		<React.Fragment>
			<Seo />
			<Header meta={meta} nav={nav} title={title} />
			{children}
			<Footer />
		</React.Fragment>
	);
};

export default Layout;
