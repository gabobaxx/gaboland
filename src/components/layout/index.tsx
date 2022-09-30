import type { ReactNode } from 'react';
import Header from 'components/header';
import Footer from 'components/footer';

type LayoutProps = {
	children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}
