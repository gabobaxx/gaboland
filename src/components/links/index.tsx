/* eslint-disable no-unused-vars */
import type { LinkProps as TLinkProps } from 'theme-ui';
import { Link as TLink } from 'theme-ui';
import type { Link as RLink, LinkProps as RLinkProps } from '@remix-run/react';

interface MyLinkProps extends TLinkProps, RLinkProps {
	as: typeof RLink; // this is now required
}

const Link = TLink as any as (props: MyLinkProps) => JSX.Element;

export default Link;
