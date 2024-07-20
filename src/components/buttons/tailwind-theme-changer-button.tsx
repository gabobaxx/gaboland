import { useColorMode } from 'theme-ui';
import { Theme, useTheme } from 'utils/theme-provider';

import { SunIcon } from '@heroicons/react/24/solid';

const ThemeChangerButton = () => {
	// Tailwind theme changer
	const [theme, setTheme] = useTheme();

	// const [colorMode, setColorMode] = useColorMode();
	const isDark = theme === Theme.DARK;
	const toggleColorMode = () => {
		// setColorMode(isDark ? 'light' : 'dark');
		// Tailwind theme changer
		setTheme((prevTheme) =>
			prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
		);
	};

	return (
		<button
			className="text-4xl bg-none border-0 text-primary-700 dark:text-grayscale-100 hover:text-primary-300 dark:hover:text-primary-300"
			onClick={toggleColorMode}
			aria-label="Toggle dark mode"
		>
			{isDark ? (
				<SunIcon className="h-10 w-10 md:h-10 md:w-10" />
			) : (
				<i className="bi bi-moon-stars"></i>
			)}
		</button>
	);
};

export default ThemeChangerButton;
