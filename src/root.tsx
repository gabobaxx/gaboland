import { isRouteErrorResponse, useRouteError } from "@remix-run/react";
// * Types/Interfaces
import type { ReactNode } from "react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
// * Theme
import {
	ThemeProvider as TailwindThemeProvider,
	useTheme,
} from "utils/theme-provider";

import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";

import { stylesheet } from "styles";
import notion from "styles/notion.css";
import styles from "styles/tailwind.css";
import clsx from "clsx";



export const links: LinksFunction = () => [
	stylesheet.reset,
	stylesheet.fonts,
	stylesheet.icons,
	{ rel: "stylesheet", href: notion },
	{ rel: "stylesheet", href: styles },
	
];

export const meta: MetaFunction = () => {
	return [
		{ title: "Gaboland - Solution Maker" },
		{
			property: "og:title",
			content: "Gaboland - Solution Maker",
		},
		{
			name: "description",
			content: "This app is the best",
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
						color: "#fff",
						display: "flex",
						alignItems: "center",
						background: "#0E0E0E",
						fontFamily: "Manrope",
						flexDirection: "column",
						justifyContent: "center",
					}}
				>
					<h4>CODE {error.status}</h4>
					<h3>{error.statusText.toUpperCase()}</h3>
					<h2>
						Go back to{" "}
						<a
							href={error.data !== null ? error.data.slug : "/"}
							style={{ color: "#09f" }}
						>
							{error.data !== null
								? error.data.route
								: "homepage"}
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

const Document = ({ children }: { children: ReactNode }) => {
	const [theme] = useTheme();
	return (
		<html lang="es" className={clsx(theme)}>
			<head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width,
					initial-scale=1"
				/>
				<Meta />
				<Links />
				{/* Google Tag Manager */}
                <script dangerouslySetInnerHTML={{__html: `
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-5DJWLBRN');
                `}} />
                {/* End Google Tag Manager */}
			</head>

			<body className="dark:bg-extra-dark">
				{/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe 
                        src="https://www.googletagmanager.com/ns.html?id=GTM-5DJWLBRN"
                        height="0" 
                        width="0" 
                        style={{ display: 'none', visibility: 'hidden' }}
                    />
                </noscript>
                {/* End Google Tag Manager (noscript) */}
				{children}
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
};

export default function App() {
	return (
		<TailwindThemeProvider>
			<Document>
				<Outlet />
			</Document>
		</TailwindThemeProvider>
	);
}
