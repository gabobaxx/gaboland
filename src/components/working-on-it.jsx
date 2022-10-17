import { Flex } from 'theme-ui';
import Button from 'components/buttons/button';

const WorkingOnIt = () => (
	<Flex
		sx={{
			maxWidth: '100%',
			height: '100vh',
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'column',
		}}
	>
		<img alt="Gif en Construccion" src="/working-on-it-gif.png" />
		<p>Sorry, this page is under construction...</p>
		<Button to="/"> Home Page </Button>
	</Flex>
);
export default WorkingOnIt;
