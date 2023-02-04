import { Flex, Box } from 'theme-ui';
// * Configs
import { PageNavLinks } from 'config';
import { me as gabriel } from 'config';
// * Components
import Hero from 'components/hero';
import Header from 'components/header';
import SectionTitle from 'components/sections/title';
import { SocialLinksBadges } from 'components/links/social-links-badges';

export default function About() {
	return (
		<>
			<Header links={PageNavLinks.about} />
			<Hero name={'Hi, I am Gabriel'} occupation={gabriel.occupation} />

			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					maxWidth: '600px',
					margin: '0 auto',
				}}
			>
				<Flex
					sx={{
						margin: 24,
						alignItems: 'center',
						justifyContent: 'space-between',
					}}
				>
					<SocialLinksBadges hidden={{ render: ['instagram'] }} />
				</Flex>
			</Box>

			<Box
				variant="layout.featured"
				sx={{ display: 'flex', flexDirection: ['column', 'row'] }}
			>
				<Box sx={{ width: ['100%', '50%'] }}>
					<SectionTitle title="Who am I?" />

					<Box variant="layout.containers.paragraph">
						<p>
							I’m an engineer and also web developer from venezuela who loves to
							contribute to the growth and advancement of civilization.
						</p>
						<p>
							Some technologies I enjoy working with include modern software and
							methodologies like React, Remix, Nextjs, Graphql, Deno and more.
						</p>
						<p>
							The phrase I always repeat is make solutions, and stay away from
							problems.
						</p>
					</Box>
				</Box>

				<Box sx={{ width: ['100%', '50%'] }}>
					<SectionTitle title="Hobbies" />
					<Box variant="layout.containers.paragraph">
						<p>
							I am always looking for books, articles and podcasts that leave me
							a technical or ideological teaching to quesion my way of thinking
							and acting. If you have one of this resources contact me and show
							it to me.
						</p>
					</Box>
				</Box>
			</Box>

			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					maxWidth: '600px',
					margin: '0 auto',
				}}
			>
				<SectionTitle title="Roadmap" />
				<Box variant="layout.containers.paragraph">
					<p>
						I plan to learn about Blockchain and Artificial Inteligence because
						I think they will be a help for the advancement of humanity. If you
						have knowledge about this topics contact me.
					</p>
				</Box>
			</Box>

			<Flex variant="layout.footer" sx={{ justifyContent: 'space-evenly' }}>
				<SocialLinksBadges hidden={{ responsive: 'instagram' }} />
			</Flex>
		</>
	);
}
