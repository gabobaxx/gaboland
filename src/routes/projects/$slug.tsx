// * Remix/React Packages
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
// * Third Party Packages
import { marked } from 'marked';
import invariant from 'tiny-invariant';
// * Custom Packages
import { getPost } from 'models/posts.server';
// * Types/Interfaces
import type { LoaderFunction } from '@remix-run/node';
import type { Post } from 'models/posts.server';

import { projects } from './projects';

type LoaderData = {
	project: {
		slug: string;
		title: string;
		preview: string;
		description: string;
		markdown: string;
	};
	html: string;
};

export const loader: LoaderFunction = async ({ params }) => {
	invariant(params.slug, 'params.slug is required');

	const project = projects.find((project) => project.slug === params.slug);
	// const post = await getPost(params.slug);
	invariant(project, `Post not found: ${params.slug}`);

	const html = marked(project.markdown);
	return json<LoaderData>({ project, html });
};

export default function ProjectSlug() {
	const { project, html } = useLoaderData() as LoaderData;

	return (
		<main className="mx-auto max-w-4xl">
			<h1 className="my-6 border-b-2 text-center text-3xl">{project.title}</h1>
			<div dangerouslySetInnerHTML={{ __html: html }} />
		</main>
	);
}
