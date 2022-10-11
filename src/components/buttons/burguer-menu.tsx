import { Button } from 'theme-ui';

const BurguerMenu = () => {
	return (
		<Button
			as="button"
			variant="buttons.toggle"
			onClick={() => console.log('Booyah!')}
			aria-label="Toggle menu"
		>
			<i className="bi bi-list"></i>
		</Button>
	);
};

export default BurguerMenu;
