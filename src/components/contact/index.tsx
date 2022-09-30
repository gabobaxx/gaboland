import { Box, Flex } from 'theme-ui';
import CardContact from 'components/cards/contact-card';

import { linkedin, twitter } from 'utils';

export default function Contact() {
	return (
		<Box as="section" id="contact">
			<h2>Contact</h2>
			<Flex
				sx={{
					gap: '1.5rem',
					textAlign: 'center',
					alignItems: 'center',
					flexDirection: 'column',
				}}
			>
				{/* <Contact /> */}
				<CardContact
					title="Work Contact"
					icons={{ first: 'email', second: 'linkedin' }}
					to={{
						first: linkedin,
						second: linkedin,
					}}
				>
					If you are an entrepreneur or somebody who are looking for someone who
					develop your app or website, you can contact me from 8:00h to 11:00h
					and from 15:00h to 18:h ET. for an immediate response.
				</CardContact>
				<CardContact
					title="Friendly Contact"
					icons={{ first: 'telegram', second: 'twitter' }}
					to={{
						first: 'https://t.me/gabrielba15',
						second: twitter,
					}}
				>
					If you are an old friend or a stranger who wants to contact me for
					anything (say hello, connection, etc.) write at any time through the
					media but do not expect an immediate response.
				</CardContact>
			</Flex>
		</Box>
	);
}
