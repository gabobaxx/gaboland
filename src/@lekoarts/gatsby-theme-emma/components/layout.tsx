import * as React from 'react';
import { Global } from '@emotion/react';
import { Box } from 'theme-ui';
// Hooks!
import useSiteMetadata from '@lekoarts/gatsby-theme-emma/src/hooks/use-site-metadata';
import useNavigation from '@lekoarts/gatsby-theme-emma/src/hooks/use-navigation';
// Components!
import Header from '@lekoarts/gatsby-theme-emma/src/components/header';
import Footer from '@lekoarts/gatsby-theme-emma/src/components/footer';
import Seo from '@lekoarts/gatsby-theme-emma/src/components/seo';

type LayoutProps = { children: React.ReactNode; className?: string };

const Layout = ({ children, className = `` }: LayoutProps) => {
	const meta = useSiteMetadata();
	const nav = useNavigation();

	return (
		<React.Fragment>
			<Global
				styles={(theme: any) => ({
					'*': {
						boxSizing: `inherit`,
					},
					html: {
						WebkitTextSizeAdjust: `100%`,
					},
					img: {
						borderStyle: `none`,
					},
					pre: {
						fontFamily: `monospace`,
						fontSize: `1em`,
					},
					'[hidden]': {
						display: `none`,
					},
					'::selection': {
						backgroundColor: theme.colors.text,
						color: theme.colors.background,
					},
					a: {
						transition: `all 0.3s ease-in-out`,
					},
				})}
			/>
			<Seo />
			<Header meta={meta} nav={nav} />
			<Box as="main" variant="layout.main" className={className}>
				{children}
			</Box>
			<Footer />
		</React.Fragment>
	);
};

export default Layout;
