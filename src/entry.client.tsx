// * React
import { hydrate } from 'react-dom';
import { useCallback, useState } from 'react';
import { RemixBrowser } from '@remix-run/react';
// * Emotion Cache
import { CacheProvider } from '@emotion/react';
import { ClientStyleContext } from './styles/context';
import { createEmotionCache } from './styles/createEmotionCache';
// * Types
import type { ReactNode } from 'react';
type ClientCacheProviderProps = {
	children: ReactNode;
};

const ClientCacheProvider = ({ children }: ClientCacheProviderProps) => {
	const [cache, setCache] = useState(createEmotionCache());

	const reset = useCallback(() => setCache(createEmotionCache()), []);

	return (
		<ClientStyleContext.Provider value={{ reset }}>
			<CacheProvider value={cache}>{children}</CacheProvider>
		</ClientStyleContext.Provider>
	);
};

hydrate(
	<ClientCacheProvider>
		<RemixBrowser />
	</ClientCacheProvider>,
	document
);
