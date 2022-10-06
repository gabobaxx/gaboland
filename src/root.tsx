import { useContext, useEffect } from 'react';
import { withEmotionCache } from '@emotion/react';
// * Types/Interfaces
import type { ReactNode } from 'react';
import type { MetaFunction, LinksFunction } from '@remix-run/node';
// * Theme
import Theme from 'styles/theme';
import { ThemeProvider } from 'theme-ui';
import { ServerStyleContext, ClientStyleContext } from './styles/context';

import Layout from 'components/layout';

import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react';

import { stylesheet } from 'styles';

export const links: LinksFunction = () => [
	stylesheet.reset,
	stylesheet.fonts,
	stylesheet.icons,
];

export const meta: MetaFunction = () => ({
	charset: 'utf-8',
	title: 'Gaboland - Solution Maker',
	viewport: 'width=device-width,initial-scale=1',
});

type DocumentProps = {
	children: ReactNode;
};
const Document = withEmotionCache(
	({ children }: DocumentProps, _emotionCache) => {
		const serverStyleData = useContext(ServerStyleContext);
		const clientStyleData = useContext(ClientStyleContext);
		const resetClientStyleData = clientStyleData?.reset || function () {};

		// Only executed on client
		useEffect(() => {
			resetClientStyleData();
		}, [resetClientStyleData]);

		return (
			<html lang="en">
				<head>
					<Meta />
					<Links />
					{serverStyleData?.map(({ key, ids, css }) => (
						<style
							key={key}
							data-emotion={`${key} ${ids.join(' ')}`}
							dangerouslySetInnerHTML={{ __html: css }}
						/>
					))}
				</head>

				<body>
					{children}
					<ScrollRestoration />
					<Scripts />
					<LiveReload />
				</body>
			</html>
		);
	}
);

export default function App() {
	return (
		<Document>
			<ThemeProvider theme={Theme}>
				<Layout>
					<Outlet />
				</Layout>
			</ThemeProvider>
		</Document>
	);
}
