import type { Config } from 'tailwindcss';
import { colors } from './src/styles/theme/styles/colors';

export default {
	darkMode: 'class',
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					100: colors.primary[100],
					200: colors.primary[200],
					300: colors.primary[300],
					500: colors.primary[400],
					400: colors.primary[500],
					600: colors.primary[600],
					700: colors.primary[700],
					800: colors.primary[800],
					900: colors.primary[900],
				},
				secondary: {
					100: colors.secondary[100],
					200: colors.secondary[200],
					300: colors.secondary[300],
					500: colors.secondary[400],
					400: colors.secondary[500],
					600: colors.secondary[600],
					700: colors.secondary[700],
					800: colors.secondary[800],
					900: colors.secondary[900],
				},
				tertiary: {
					100: colors.tertiary[100],
					200: colors.tertiary[200],
					300: colors.tertiary[300],
					400: colors.tertiary[400],
					500: colors.tertiary[500],
					600: colors.tertiary[600],
					700: colors.tertiary[700],
					800: colors.tertiary[800],
					900: colors.tertiary[900],
				},
				grayscale: {
					100: colors.grayscale[100],
					200: colors.grayscale[200],
					300: colors.grayscale[300],
					400: colors.grayscale[400],
					500: colors.grayscale[500],
					600: colors.grayscale[600],
					700: colors.grayscale[700],
					800: colors.grayscale[800],
					900: colors.grayscale[900],
				},
				extra: {
					checks: '#F7F7FC',
					dark: '#0E0E0E',
				},
			},
		},
	},
	plugins: [],
} satisfies Config;
