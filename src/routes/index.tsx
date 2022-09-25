/* eslint-disable react/react-in-jsx-scope */
import { Link } from '@remix-run/react';

export default function Index() {
	return (
		<div className="mx-auto mt-16 max-w-7xl text-center">
			<Link to="/posts" className="text-xl text-blue-600 underline">
				Blog Posts
			</Link>
		</div>
	);
}
