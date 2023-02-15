import { useColorMode, Button } from 'theme-ui';

const ThemeChangerButton = () => {
	const [colorMode, setColorMode] = useColorMode();
	const isDark = colorMode === 'dark';
	const toggleColorMode = (_e) => {
		setColorMode(isDark ? 'light' : 'dark');
	};
	return (
		<Button
			as="button"
			variant="buttons.toggle"
			onClick={toggleColorMode}
			aria-label="Toggle dark mode"
		>
			{isDark ? (
				<i className="bi bi-brightness-high"></i>
			) : (
				<i className="bi bi-moon-stars"></i>
			)}
		</Button>
	);
};

export default ThemeChangerButton;
