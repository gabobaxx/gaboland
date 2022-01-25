import * as React from 'react';
import { Image, Box } from 'theme-ui';

const Hero = ({
	children,
	name = 'Gabriel',
	imageSrc = 'me.jpg',
	location = 'Venezuela',
	imageAlt = 'Selfie of Me',
	occu = 'Future Systems Engineer',
}) => (
	<React.Fragment>
		<Box sx={{ maxWidth: 200, mx: 'auto', mt: 60 }}>
			<Image
				as={Image}
				src={imageSrc}
				alt={imageAlt}
				sx={{ borderRadius: '50%', width: '100%', height: 200 }}
			/>
			<Box as="section" sx={{ width: '100%', textAlign: 'center' }}>
				<Box as="h2">Hi, I am {name}.</Box>
				<Box as="h5">{occu}.</Box>
				<Box as="h4">
					<i
						style={{ marginRight: 5 + 'px' }}
						className="bi bi-geo-alt-fill"
					></i>
					{location}
				</Box>
			</Box>
		</Box>
		<Box sx={{ mb: 60, textAlign: 'center' }}>{children}</Box>
	</React.Fragment>
);

export default Hero;
