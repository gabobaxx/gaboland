import { projects } from './projects';
import { Link } from '@remix-run/react';

export default function Projects() {
	return (
		<main>
			<h1>Posts</h1>

			<ul>
				<li>
					<Link to="admin" className="text-red-600 underline">
						Admin
					</Link>
				</li>
				{projects.map((project) => (
					<li key={project.slug}>
						<Link to={project.slug} className="text-blue-600 underline">
							{project.title}
						</Link>
					</li>
				))}
			</ul>
		</main>
	);
}
