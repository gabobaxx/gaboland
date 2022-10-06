import './styles/global.css';
import { merge } from 'theme-ui';
import { tailwind } from '@theme-ui/presets';

import { cards } from './styles/cards';
import { styles } from './styles/styles';
import { layout } from './styles/layout';
import { buttons } from './styles/buttons';
import { fonts, fontSizes, fontWeights, lineHeights } from './styles/fonts';

export default merge(tailwind, {
	config: {
		initialColorModeName: 'light',
	},
	colors: {
		primary: '#994747',
		p100: '#C29191',
		p200: '#B87E7E',
		p300: '#AD6C6C',
		p400: '#A35959',
		p600: '#8A4040',
		p700: '#7A3939',
		p800: '#6B3232',
		p900: '#5C2B2B',
		pgradient: 'linear-gradient(96.38deg, #994747 34.72%, #40474A 83.72%)',

		secondary: '#D1917F',
		s100: '#e3bdb2',
		s200: '#dfb2a5',
		s300: '#daa799',
		s400: '#d69c8c',
		s600: '#bc8372',
		s700: '#a77466',
		s800: '#926659',
		s900: '#7d574c',
		sgradient: 'linear-gradient(180deg, #D1917F 0%, #F2C94C 100%)',

		tertiary: '#6A767C',
		t100: '#a6adb0',
		t200: '#979fa3',
		t300: '#E1D5DD',
		t400: '#798489',
		t600: '#5f6a70',
		t700: '#555e63',
		t800: '#4a5357',
		t900: '#40474a',
		tgradient: 'linear-gradient(230.96deg, #3CB96E 15.34%, #979FA3 72.39%)',

		grayscale: '#BDBDBD',
		gs100: '#F8F8F8',
		gs200: '#EBEBEB',
		gs300: '#DEDEDE',
		gs400: '#D1D1D1',
		gs600: '#848484',
		gs700: '#5F5F5F',
		gs800: '#393939',
		gs900: '#131313',

		alert: '#BE342D',
		warning: '#F2C94C',
		success: '#3CB96E',

		// Extras
		bg: '#FCFCFC',
		bgInput: '#EFF0F6',
		bgCard: '#FCFCFC',
		checks: '#F7F7FC',
		light: '#E4DAFF',
		shadowFigma: 'rgba(0,0,0,.8)',
		strokeButton: '#D9DBE9',
		figmaTitle: '#6E7191',
		background: '#fff',
		modes: {
			dark: {
				background: '#0E0E0E',
			},
		},
	},

	/*fontSizes,*/
	styles,
	fonts,
	fontWeights,
	lineHeights,
	cards,
	layout,
	buttons,
});
