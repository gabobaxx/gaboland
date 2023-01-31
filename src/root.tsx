import { useContext, useEffect } from 'react';
import { useCatch } from '@remix-run/react';
// * Types/Interfaces
import type { ReactNode } from 'react';
import type { MetaFunction, LinksFunction } from '@remix-run/node';
// * Theme
import Theme from 'styles/theme';
import { ThemeProvider } from 'theme-ui';
import { withEmotionCache } from '@emotion/react';
import { ServerStyleContext, ClientStyleContext } from './styles/context';

import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react';

import { stylesheet } from 'styles';
import notion from 'styles/notion.css';

export const links: LinksFunction = () => [
	stylesheet.reset,
	stylesheet.fonts,
	stylesheet.icons,
	{
		rel: 'stylesheet',
		href: notion,
	},
];

export const meta: MetaFunction = () => ({
	charset: 'utf-8',
	title: 'Gaboland - Solution Maker',
	viewport: 'width=device-width,initial-scale=1',
});

export function CatchBoundary() {
	const caught = useCatch();

	return (
		<html>
			<head>
				<title>Oops! Somenthing Wrong :(</title>
				<Meta />
				<Links />
			</head>
			<body
				style={{
					color: '#fff',
					display: 'flex',
					alignItems: 'center',
					background: '#0E0E0E',
					fontFamily: 'Manrope',
					flexDirection: 'column',
					justifyContent: 'center',
				}}
			>
				<h4>CODE {caught.status}</h4>
				<h3>{caught.statusText.toUpperCase()}</h3>
				<h2>
					Go back to{' '}
					<a
						href={caught.data !== null ? caught.data.slug : '/'}
						style={{ color: '#09f' }}
					>
						{caught.data !== null ? caught.data.route : 'homepage'}
					</a>
					.
				</h2>
			</body>
		</html>
	);
}

const Document = withEmotionCache(
	(
		{
			children,
		}: {
			children: ReactNode;
		},
		_emotionCache
	) => {
		const serverStyleData = useContext(ServerStyleContext);
		const clientStyleData = useContext(ClientStyleContext);
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
				<Outlet />
			</ThemeProvider>
		</Document>
	);
}
