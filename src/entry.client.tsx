/* eslint-disable react/react-in-jsx-scope */
import { RemixBrowser } from '@remix-run/react';
import { hydrateRoot } from 'react-dom/client';

hydrateRoot(document, <RemixBrowser />);
