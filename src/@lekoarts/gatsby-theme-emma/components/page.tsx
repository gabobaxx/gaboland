/** @jsx jsx */
import { animated, useSpring, config } from 'react-spring';
import { Container, jsx, Flex, Heading } from 'theme-ui';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
// Components
import Layout from './layout';
import Hero from 'components/hero';
import WorkingOnIt from 'components/working-on-it';
import SEO from '@lekoarts/gatsby-theme-emma/src/components/seo';

type PageProps = {
  data: {
    page: {
      title: string;
      slug: string;
      excerpt: string;
      body: string;
    };
  };
  [key: string]: any;
};

const components = { Hero, WorkingOnIt };

const Page = ({ data: { page } }: PageProps) => {
  const titleProps = useSpring({
    config: config.slow,
    from: { opacity: 0, transform: `translate3d(0, -30px, 0)` },
    to: { opacity: 1, transform: `translate3d(0, 0, 0)` },
  });
  const contentProps = useSpring({
    config: config.slow,
    delay: 1000,
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <MDXProvider components={components}>
      <Layout header={{ title: page.title }}>
        <SEO
          title={page.title}
          description={page.excerpt}
          pathname={page.slug}
        />
        <Container>
          <animated.div style={contentProps}>
            <MDXRenderer>{page.body}</MDXRenderer>
          </animated.div>
        </Container>
      </Layout>
    </MDXProvider>
  );
};

export default Page;
