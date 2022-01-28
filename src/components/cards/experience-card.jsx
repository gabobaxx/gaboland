import * as React from 'react';
// Components
import { Box } from 'theme-ui';
import Badge from 'components/badges/badge';
import SmallCard from 'components/cards/small-card';

/*const CardHeader = ({ title }) => <Box as="header">{title}</Box>;


const CardFooter = ({ location, years }) => (
	<Box as="footer">
		<Box as="p">
			<i style={{ marginRight: 5 + 'px' }} className="bi bi-geo-alt-fill"></i>
			{location}
		</Box>
		<Badge>{years}</Badge>
	</Box>
);



const ExperienceCard = ({
	borderColor = 'p700',
	title = 'Experience Card',
	company = 'Company Name',
	location = 'State, City',
	years = '2 years',
}) => (
	<SmallCard borderColor={borderColor}>
		<CardHeader title={title} />
		<CardBody company={company} />
		<CardFooter location={location} years={years} />
	</SmallCard>
);

*/

const ExperienceCard = ({
	borderColor = 'p700',
	title = 'Experience Card',
	company = 'Company Name',
	location = 'State, Country',
	years = '2 years',
}) => (
	<SmallCard borderColor={borderColor}>
		<Box
			as="header"
			sx={{
				textAlign: 'start',
				fontSize: 24,
				px: '0.3125rem',
				color: 'gs800',
				fontFamily: 'head',
				fontStyle: 'normal',
				fontWeight: 'bold',
			}}
		>
			{title}
		</Box>
		<Box
			as="p"
			sx={{
				textAlign: 'start',
				px: '0.3125rem',
				my: '1rem',
				color: 't900',
				fontFamily: 'Manrope',
				fontWeight: 'light',
				fontSize: '1rem',
				fontStyle: 'normal',
			}}
		>
			<i style={{ marginRight: 5 + 'px' }} className="bi bi-bank"></i>
			{company}
		</Box>
		<Box
			as="footer"
			sx={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-between',
				px: '0.3125rem',
				alignItems: 'center',
				color: 't900',
				fontFamily: 'body',
				fontStyle: 'normal',
				fontWeight: 'normal',
				fontSize: '1rem',
				lineHeight: '170%',
			}}
		>
			<Box as="p">
				<i style={{ marginRight: 5 + 'px' }} className="bi bi-geo-alt-fill"></i>
				{location}
			</Box>
			<Badge>{years}</Badge>
		</Box>
	</SmallCard>
);

export default ExperienceCard;
