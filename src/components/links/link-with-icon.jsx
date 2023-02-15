import { Link } from 'gatsby';
import { Box, Link as TLink } from 'theme-ui';

/* This component is a link with a button outline styles*/

const LinkWithIcon = ({ children, to = '/about', borderColor = 'p700' }) => (
	<TLink
		as={Link}
		key="link-with-icon"
		to={to}
		sx={{
			// p: 24,
			border: '2px solid',
			borderColor: borderColor,
			cursor: 'pointer',
			textAlign: 'center',
			textDecoration: 'none',
			borderRadius: '8px',
			minWidth: '8.125rem',
			padding: '0.5rem',
			pl: '0.8rem',
			fontSize: '0.875rem',
			color: borderColor,
			display: 'flex',
			flexDirection: 'row',
		}}
	>
		<Box
			sx={{
				m: '0 auto',
				fontSize: '1rem',
				fontFamily: 'body',
				fontWeight: 'bold',
			}}
		>
			{children || 'About Me'}
		</Box>
		<Box
			sx={{
				fontSize: 24,
			}}
			className="bi bi-arrow-right-short"
		></Box>
	</TLink>
);

export default LinkWithIcon;
