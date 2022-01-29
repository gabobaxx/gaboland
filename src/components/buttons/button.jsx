import * as React from 'react';
import { Link } from 'gatsby';
import { Link as TLink } from 'theme-ui';

const Button = ({ children, to = '/' }) => (
	<TLink
		as={Link}
		key="button"
		to={to}
		sx={{
			color: 'p800',
			cursor: 'pointer',
			padding: '0.5rem',
			border: '2px solid',
			borderRadius: '8px',
			textAlign: 'center',
			fontSize: '0.875rem',
			minWidth: '8.125rem',
			borderColor: 'p800',
			fontFamily: 'body',
			fontWeight: 'bold',
			textDecoration: 'none',
		}}
	>
		{children}
	</TLink>
);

export default Button;
