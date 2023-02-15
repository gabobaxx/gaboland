import { merge } from 'theme-ui';
import { tailwind } from '@theme-ui/presets';

import { cards } from './styles/cards';
import { colors } from './styles/colors';
import { styles } from './styles/styles';
import { layout } from './styles/layout';
import { buttons } from './styles/buttons';
import { fonts, fontSizes, fontWeights, lineHeights } from './styles/fonts';

const DarkModeColors = {
	faztweb: '#0E0E0E',
	kentcdodds: '#1F2028',
};

export default merge(tailwind, {
	config: {
		initialColorModeName: 'dark',
	},
	colors: {
		primary: colors.primary[500],
		P100: colors.primary[100],
		P200: colors.primary[200],
		P300: colors.primary[300],
		P400: colors.primary[400],
		P600: colors.primary[600],
		P700: colors.primary[700],
		P800: colors.primary[800],
		P900: colors.primary[900],

		secondary: colors.secondary[500],
		S100: colors.secondary[100],
		S200: colors.secondary[200],
		S300: colors.secondary[300],
		S400: colors.secondary[400],
		S600: colors.secondary[600],
		S700: colors.secondary[700],
		S800: colors.secondary[800],
		S900: colors.secondary[900],

		tertiary: colors.tertiary[500],
		T100: colors.tertiary[100],
		T200: colors.tertiary[200],
		T300: colors.tertiary[300],
		T400: colors.tertiary[400],
		T600: colors.tertiary[600],
		T700: colors.tertiary[700],
		T800: colors.tertiary[800],
		T900: colors.tertiary[900],

		grayscale: colors.grayscale[500],
		GS100: colors.grayscale[100],
		GS200: colors.grayscale[200],
		GS300: colors.grayscale[300],
		GS400: colors.grayscale[400],
		GS600: colors.grayscale[600],
		GS700: colors.grayscale[700],
		GS800: colors.grayscale[800],
		GS900: colors.grayscale[900],

		alert: '#BE342D',
		warning: '#F2C94C',
		success: '#3CB96E',

		// ? Extras
		bg: '#FCFCFC',
		light: '#E4DAFF',
		bgCard: '#FCFCFC',
		bgInput: '#EFF0F6',
		figmaTitle: '#6E7191',
		strokeButton: '#D9DBE9',
		shadowFigma: 'rgba(0,0,0,.8)',

		// ! Gradients problems: Document does not read gradient colors.
		PGradient: 'linear-gradient(96.38deg, #994747 34.72%, #40474A 83.72%)',
		sgradient: 'linear-gradient(180deg, #D1917F 0%, #F2C94C 100%)',
		tgradient: 'linear-gradient(230.96deg, #3CB96E 15.34%, #979FA3 72.39%)',

		// * Light Theme
		HeaderText: colors.primary[700],
		FontColor: colors.grayscale[800],
		ContactCardBackgroundColor: '#F7F7FC',
		BackgroundColorCardFeatured: '#FCFCFC',
		BackgroundColorCard: colors.grayscale[100],
		FeaturedBackground: '#F7F7F7',
		SpanOne: '#3CB96E',
		SpanTwo: colors.primary[900],
		SpanThree: '#F2C94C',
		BorderColorOutlineButton: colors.primary[900],
		FontColorOutlineButton: colors.primary[900],
		FeaturedProjectBackground: colors.primary[500],
		FeaturedPostBackground: '#FCFCFC',
		CalasDreamerBackground: colors.primary[100],
		TerapistBackground: colors.primary[900],
		FooterBackground: colors.primary[500],
		modes: {
			altamira: {
				background: DarkModeColors.kentcdodds,
			},
			dark: {
				FontColor: colors.grayscale[100],
				HeaderText: colors.grayscale[100],
				background: DarkModeColors.faztweb,
				FeaturedBackground: DarkModeColors.faztweb,
				BackgroundColorCard: colors.grayscale[900],
				BackgroundColorCardFeatured: colors.grayscale[900],
				SpanOne: '#BE342D', // alert
				SpanTwo: '#3CB96E', // success
				SpanThree: '#F2C94C', // warning
				FontColorOutlineButton: colors.grayscale[100],
				BorderColorOutlineButton: colors.grayscale[100],
				FeaturedProjectBackground: colors.grayscale[900],
				FeaturedPostBackground: colors.grayscale[900],
				CalasDreamerBackground: colors.grayscale[900],
				TerapistBackground: colors.grayscale[900],
				FooterBackground: DarkModeColors.faztweb,
				ContactCardBackgroundColor: colors.grayscale[900],
			},
		},
	},

	fontSizes,
	styles,
	fonts,
	fontWeights,
	lineHeights,
	cards,
	layout,
	buttons,
});
