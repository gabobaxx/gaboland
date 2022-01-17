import React from 'react';
import { Card as CardUI, Box } from 'theme-ui';

export const CardVertical = ({ children, title, borderColor }) => (
	<CardUI
		variant="cards.principal"
		sx={{
			maxWidth: 366,
			height: 149,
			borderColor: borderColor || 'p700',
			borderRadius: 20,
		}}
	>
		<CardUI
			as="section"
			sx={{
				width: 318,
				height: 125,
				overflow: 'hidden',
			}}
		>
			<Box
				sx={{ display: 'flex', justifyContent: 'space-between' }}
				as="header"
			>
				{title}
			</Box>
			<Box as="p">{children}</Box>
		</CardUI>
	</CardUI>
);

const Card = ({ children, title, borderColor }) => {
	return (
		<CardUI
			sx={{
				height: 255,
				maxWidth: 366,
				borderRadius: 20,
				borderColor: borderColor || 'p700',
			}}
			variant="cards.principal"
		>
			<CardUI
				as="section"
				sx={{
					overflow: 'hidden',
				}}
			>
				<Box as="header">{title || 'Contact Card'} </Box>
				<Box as="p">{children}</Box>
				<Box as="footer">
					<i className="bi bi-github"></i>
					<i className="bi bi-github"></i>
				</Box>
			</CardUI>
		</CardUI>
	);
};

export default Card;

// const CardContent = ({ children, styles, content }) => {
// 	const { title, iconOne, iconTwo } = content || {};
// 	const { w, h } = styles || {};
// 	return (
// 		<CardUI
// 			as="section"
// 			sx={{
// 				width: w,
// 				height: h,
// 				overflow: 'hidden',
// 			}}
// 		>
// 			<Box as="header">
// 				{title}
// 				badge
// 			</Box>
// 			<Box as="p">{children || ''}</Box>
// 			<Box as="footer">
// 				{iconOne || <p>Icon 1</p>}
// 				{iconTwo || <p>Icono 2</p>}
// 			</Box>
// 		</CardUI>
// 	);
// };
