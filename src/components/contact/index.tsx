import { Box } from 'theme-ui';
import { capitalize } from 'utils';
import { SocialLinks as links } from 'config';

import { Title, Body, Footer, ContactCard } from './card';

const ContactInfo = [
	{
		title: 'Work Contact',
		body: 'If you are an entrepreneur or somebody who are looking for someone who develop your app or website, you can contact me from 8:00h to 11:00h and from 15:00h to 18:00h ET. For an immediate response.',
		links: [links.linkedin, links.linkedin],
		icons: ['inboxes-fill', 'linkedin'],
	},
	{
		title: 'Friendly Contact',
		body: 'If you just wants to say hello write at any time through the media but do not expect an immediate response.',
		links: ['t.me/gabrielba15', links.twitter],
		icons: ['telegram', 'twitter'],
	},
];

export default function Contact() {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: ['column', 'row'],
			}}
		>
			{ContactInfo.map((info) => (
				<ContactCard
					key={info.title}
					sx={{
						flexDirection: 'column',
						width: ['90%', '50%'],
						margin: '24px',
					}}
				>
					<Title>{info.title}</Title>
					<Body>{info.body}</Body>
					<Footer>
						<a target="_blank" href={info.links[0]} rel="noopener noreferrer">
							<i className={`bi bi-${info.icons[0]}`}></i>
							{info.icons[0] === 'inboxes-fill'
								? 'Email'
								: capitalize(info.icons[0])}
						</a>
						<a target="_blank" href={info.links[1]} rel="noopener noreferrer">
							<i className={`bi bi-${info.icons[1]}`}></i>
							{capitalize(info.icons[1])}
						</a>
					</Footer>
				</ContactCard>
			))}
		</Box>
	);
}
