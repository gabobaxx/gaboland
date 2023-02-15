import { Flex, Box } from 'theme-ui';

const Copyright = () => (
	<Flex
		variant="layout.footer"
		sx={{ justifyContent: 'space-between', fontSize: '0.8rem' }}
	>
		<Box as="p">&copy; {new Date().getFullYear()}. All rights reserved.</Box>
		<Box as="p">
			Made with{' '}
			<Box
				as="i"
				className="bi bi-heart-fill"
				style={{ background: 'white' }}
			></Box>{' '}
			by gabriel.
		</Box>
	</Flex>
);

export default Copyright;
