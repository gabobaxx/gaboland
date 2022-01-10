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

const CardContent = ({ children, styles, content }) => {
	const { title, iconOne, iconTwo } = content || {};
	const { w, h } = styles || {};
	return (
		<CardUI
			as="section"
			sx={{
				width: w,
				height: h,
				overflow: 'hidden',
			}}
		>
			<Box as="header">
				{title}
				badge
			</Box>
			<Box as="p">{children || ''}</Box>
			<Box as="footer">
				{iconOne || <p>Icon 1</p>}
				{iconTwo || <p>Icono 2</p>}
			</Box>
		</CardUI>
	);
};

const defaultContent = `If you are an entrepreneur or somebody who are looking for someone who
					develop your app or website, you can contact me from 8:00h to 11:00h
					and from 15:00h to 18:h ET. for an immediate response.`;
const Card = ({ children, styles, content }) => {
	const { w, h, br, bc } = styles || {};
	return (
		<CardUI
			sx={{
				maxWidth: w || 366,
				height: h || 255,
				borderColor: bc || 'p700',
				borderRadius: br || 20,
			}}
			variant="cards.principal"
		>
			<CardUI
				as="section"
				sx={{
					width: w,
					height: h,
					overflow: 'hidden',
				}}
			>
				<Box as="header">Work Contact</Box>
				<Box as="p">
					`If you are an entrepreneur or somebody who are looking for someone
					who develop your app or website, you can contact me from 8:00h to
					11:00h and from 15:00h to 18:h ET. for an immediate response.`
				</Box>
				<Box as="footer">
					<p>Icon 1</p>
					<p>Icono 2</p>
				</Box>
			</CardUI>
		</CardUI>
	);
};

export default Card;
