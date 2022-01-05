import React from 'react';
import { useColorMode } from 'theme-ui';

const ThemeChangerButton = () => {
	const [colorMode, setColorMode] = useColorMode();
	const isDark = colorMode === 'dark';
	const toggleColorMode = (_e) => {
		setColorMode(isDark ? 'light' : 'dark');
	};
	return (
		<button
			sx={{ variant: 'buttons.toggle', fontWeight: 'semibold' }}
			onClick={toggleColorMode}
			type="button"
			aria-label="Toggle dark mode"
		>
			{isDark ? 'Light' : 'Dark'}
		</button>
	);
};

export default ThemeChangerButton;
