import { useContext, useEffect } from 'react';
import { isRouteErrorResponse, useRouteError } from '@remix-run/react';
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
import styles from 'styles/tailwind.css';

export const links: LinksFunction = () => [
	stylesheet.reset,
	stylesheet.fonts,
	stylesheet.icons,
	{ rel: 'stylesheet', href: notion },
	{ rel: 'stylesheet', href: styles },
];

export const meta: MetaFunction = () => {
	return [
		{ title: 'Gaboland - Solution Maker' },
		{
			property: 'og:title',
			content: 'Gaboland - Solution Maker',
		},
		{
			name: 'description',
			content: 'This app is the best',
		},
	];
};

export function CatchBoundary() {
	const error = useRouteError();

	if (isRouteErrorResponse(error)) {
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
					<h4>CODE {error.status}</h4>
					<h3>{error.statusText.toUpperCase()}</h3>
					<h2>
						Go back to{' '}
						<a
							href={error.data !== null ? error.data.slug : '/'}
							style={{ color: '#09f' }}
						>
							{error.data !== null ? error.data.route : 'homepage'}
						</a>
						.
					</h2>
				</body>
			</html>
		);
	} else if (error instanceof Error) {
		return (
			<div>
				<h1>Error</h1>
				<p>{error.message}</p>
				<p>The stack trace is:</p>
				<pre>{error.stack}</pre>
			</div>
		);
	} else {
		return <h1>Unknown Error</h1>;
	}
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
					<meta charSet="utf-8" />
					<meta
						name="viewport"
						content="width=device-width,
					initial-scale=1"
					/>
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
