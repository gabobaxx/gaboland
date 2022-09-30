import { Flex, Box } from 'theme-ui';
import ExperienceCard from 'components/cards/experience-card';

export default function Experiences() {
	return (
		<Box as="section">
			<h2>Experiences</h2>
			<Flex
				sx={{
					gap: '1.5rem',
					textAlign: 'center',
					alignItems: 'center',
					flexDirection: 'column',
				}}
			>
				<ExperienceCard
					title="Designer"
					company="Freelance"
					location="Barinas, Venezuela"
					years="1 year"
				/>
				<ExperienceCard
					title="Web Developer"
					company="Freelance"
					location="Barinas, Venezuela"
					years="2 years"
					borderColor="success"
				/>
				<ExperienceCard
					title="UI Designer"
					company="Freelance"
					location="Barinas, Venezuela"
					years="1 year"
				/>
			</Flex>
		</Box>
	);
}
