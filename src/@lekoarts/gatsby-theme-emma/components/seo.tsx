import * as React from 'react';
import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby';
import useSiteMetadata from '@lekoarts/gatsby-theme-emma/src/hooks/use-site-metadata';

type SEOProps = {
  title?: string;
  description?: string;
  pathname?: string;
  image?: string;
  children?: React.ReactNode;
};

const SEO = ({
	title = '',
	description = '',
	pathname = '',
	image = '',
	children = null,
}: SEOProps) => {
	const site = useSiteMetadata();

	const {
		siteTitle,
		siteTitleAlt: defaultTitle,
		siteUrl,
		siteDescription: defaultDescription,
		siteLanguage,
		siteImage: defaultImage,
		author,
	} = site;

	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		url: `${siteUrl}${pathname || ''}`,
		image: `${siteUrl}${image || defaultImage}`,
	};
	return (
		<Helmet
			title={title}
			defaultTitle={defaultTitle}
			titleTemplate={`%s | ${siteTitle}`}
		>
			<html lang={siteLanguage} />
			<meta name="description" content={seo.description} />
			<meta name="image" content={seo.image} />
			<meta property="og:title" content={seo.title} />
			<meta property="og:url" content={seo.url} />
			<meta property="og:description" content={seo.description} />
			<meta property="og:image" content={seo.image} />
			<meta property="og:type" content="website" />
			<meta property="og:image:alt" content={seo.description} />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={seo.title} />
			<meta name="twitter:url" content={seo.url} />
			<meta name="twitter:description" content={seo.description} />
			<meta name="twitter:image" content={seo.image} />
			<meta name="twitter:image:alt" content={seo.description} />
			<meta name="twitter:creator" content={author} />
			<meta name="gatsby-theme" content="@lekoarts/gatsby-theme-emma" />
			<link
				rel="icon"
				type="image/jpg"
				sizes="32x32"
				href={withPrefix('/lion-banner.jpg')}
			/>
			<link
				rel="icon"
				type="image/jpg"
				sizes="16x16"
				href={withPrefix('/lion-banner.jpg')}
			/>
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href={withPrefix('/lion-banner.jpg')}
			/>
			{children}
		</Helmet>
	);
};

export default SEO;
