import './styles/global.css';
import { merge } from 'theme-ui';
import { tailwind } from '@theme-ui/presets';
// Theme Config!
import {
	fonts,
	/*	fontSizes,*/
	fontWeights,
	lineHeights,
	colors,
	styles,
	layout,
	buttons,

	cards,

} from './styles/index';

export default merge(tailwind, {
	fonts,
	/*fontSizes,*/
	fontWeights,
	lineHeights,
	colors,
	cards,
	styles,
	layout,
	buttons,
	initialColorModeName: 'light',
	config: {
		useCustomProperties: true,
	},
});
