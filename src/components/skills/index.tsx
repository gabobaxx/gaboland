import { Box, Flex } from 'theme-ui';
import SkillCard from 'components/cards/skill-card';

export default function Skills() {
	return (
		<Box as="section">
			<h2>Skills</h2>
			<Flex
				sx={{
					gap: '1.5rem',
					textAlign: 'center',
					alignItems: 'center',
					flexDirection: 'column',
				}}
			>
				<SkillCard
					title="Programming"
					borderColor="success"
					to="skills/programming"
				>
					My life as a programmer started in 2019. I have 3 years of experiences
					and I am still learning.
				</SkillCard>
				<SkillCard title="Design" to="skills/design">
					I have 2 year designing and learning technologies associeted with it
					and I still do not stop.
				</SkillCard>
				<SkillCard
					title="Autodidact"
					borderColor="success"
					to="skills/autodidact"
				>
					since 2017 I have not stopped learning somenthing new every single
					day.
				</SkillCard>
			</Flex>
		</Box>
	);
}
