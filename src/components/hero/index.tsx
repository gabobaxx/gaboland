import { Image, Box, Flex } from 'theme-ui';

type HeroProps = {
	image?: {
		src: string;
		alt?: string;
	};
	name?: string;
	location?: string;
	occupation?: string;
};
const Hero = ({ image, name, location, occupation }: HeroProps) => {
	return (
		<Flex variant="layout.hero">
			<Image
				as={Image}
				alt={image?.alt ?? 'Selfie'}
				src={image?.src ?? 'assets/me.jpg'}
				sx={{
					width: 200,
					height: 200,
					borderRadius: '50%',
				}}
			/>
			<Box sx={{ textAlign: 'center' }}>
				<h2>{name ?? 'Jhon Doe'}</h2>
				<h5>{occupation ?? 'Web Developer'}</h5>
				{location && (
					<h4>
						<i
							style={{ marginRight: 5 + 'px' }}
							className="bi bi-geo-alt-fill"
						></i>
						{location}
					</h4>
				)}
			</Box>
		</Flex>
	);
};

// const HeroV1Beta = (props: HeroProps) => (
// 	<Box as="section" sx={{ gridColumn: '1/-1' }}>
// 		<Box sx={{ maxWidth: 200, mx: 'auto', mt: 60 }}>
// 			<Image
// 				as={Image}
// 				src={props.imageSrc || 'assets/me.jpg'}
// 				alt={props.imageAlt || 'Selfie'}
// 				sx={{ borderRadius: '50%', width: '100%', height: 200 }}
// 			/>
// 			<Box
// 				sx={{
// 					mt: '1.5rem',
// 					width: '100%',
// 					gap: '0.75rem',
// 					color: 'gs800',
// 					display: 'flex',
// 					textAlign: 'center',
// 					flexDirection: 'column',
// 				}}
// 			>
// 				<Box as="h2">Hi, I am {props.name || 'Gabriel'}.</Box>
// 				<Box as="h5">{props.occupation || 'Software Engineer'}.</Box>
// 				<Box as="h4">
// 					<i
// 						style={{ marginRight: 5 + 'px' }}
// 						className="bi bi-geo-alt-fill"
// 					></i>
// 					{props.country || 'Venezuela'}
// 				</Box>
// 			</Box>
// 		</Box>

// 		{props.children}
// 	</Box>
// );

export default Hero;
