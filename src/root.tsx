import type { ReactNode } from 'react';
import { useContext, useEffect } from 'react';
import { ThemeProvider } from '@theme-ui/core';
import { withEmotionCache } from '@emotion/react';
import type { MetaFunction } from '@remix-run/node';

import theme from 'styles/theme';
import { ServerStyleContext, ClientStyleContext } from './styles/context';

import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react';

export const meta: MetaFunction = () => ({
	charset: 'utf-8',
	title: 'Gaboland - Solution Maker',
	viewport: 'width=device-width,initial-scale=1',
});

type DocumentProps = {
	children: ReactNode;
};
const Document = withEmotionCache(
	({ children }: DocumentProps, emotionCache) => {
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
			<ThemeProvider theme={theme}>
				<Outlet />
			</ThemeProvider>
		</Document>
	);
}
