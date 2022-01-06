import * as React from 'react';
// Hooks!
import useSiteMetadata from '@lekoarts/gatsby-theme-emma/src/hooks/use-site-metadata';
import useNavigation from '@lekoarts/gatsby-theme-emma/src/hooks/use-navigation';
// Components!
import Header from '@lekoarts/gatsby-theme-emma/src/components/header';
import Footer from '@lekoarts/gatsby-theme-emma/src/components/footer';
import Seo from '@lekoarts/gatsby-theme-emma/src/components/seo';
// Sections
import About from '../../content/pages/about';

const Home = ({ children }) => {
	const meta = useSiteMetadata();
	const nav = useNavigation();
	console.log(children);
	return (
		<React.Fragment>
			<Seo title={'Home'} description={'Home Page'} />
			<Header meta={meta} nav={nav} />
			<h2>About</h2>
			<About />
			<Footer />
		</React.Fragment>
	);
};

export default Home;
