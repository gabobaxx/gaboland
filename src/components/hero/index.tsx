import type { ReactNode } from 'react';
import { Image, Box, Flex } from 'theme-ui';

type HeroProps = {
	children?: ReactNode;
	name?: string;
	imageSrc?: string;
	imageAlt?: string;
	country?: string;
	occupation?: string;
};

// mt: '1.5rem',
// width: '100%',
// gap: '0.75rem',
// color: 'gs800',
// display: 'flex',
// textAlign: 'center',
// flexDirection: 'column',

const Hero = () => {
	return (
		<Flex
			sx={{
				gridColumn: '1/-1',
				alignItems: 'center',
				flexDirection: 'column',
			}}
		>
			<Image
				as={Image}
				alt="Selfie"
				src="assets/me.jpg"
				sx={{ borderRadius: '50%', width: 200, height: 200 }}
			/>
			<h2>Gabriel Bencomo.</h2>
			<Box as="h5">Web Developer & Solution Maker.</Box>
			<Box as="h4">
				<i style={{ marginRight: 5 + 'px' }} className="bi bi-geo-alt-fill"></i>
				Venezuela
			</Box>
		</Flex>
	);
};

const HeroV1Beta = (props: HeroProps) => (
	<Box as="section" sx={{ gridColumn: '1/-1' }}>
		<Box sx={{ maxWidth: 200, mx: 'auto', mt: 60 }}>
			<Image
				as={Image}
				src={props.imageSrc || 'assets/me.jpg'}
				alt={props.imageAlt || 'Selfie'}
				sx={{ borderRadius: '50%', width: '100%', height: 200 }}
			/>
			<Box
				sx={{
					mt: '1.5rem',
					width: '100%',
					gap: '0.75rem',
					color: 'gs800',
					display: 'flex',
					textAlign: 'center',
					flexDirection: 'column',
				}}
			>
				<Box as="h2">Hi, I am {props.name || 'Gabriel'}.</Box>
				<Box as="h5">{props.occupation || 'Software Engineer'}.</Box>
				<Box as="h4">
					<i
						style={{ marginRight: 5 + 'px' }}
						className="bi bi-geo-alt-fill"
					></i>
					{props.country || 'Venezuela'}
				</Box>
			</Box>
		</Box>

		{props.children}
	</Box>
);

export default Hero;
