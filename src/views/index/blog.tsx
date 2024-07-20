// * Custom Components
import { Outline } from 'components/links/links';
import Card from 'components/cards/tailwind-card';
import { Bookmark, SparklesIcon } from 'components/icons';
import SectionTitle from 'components/sections/title-with-star';
// * Utils
import { Post } from 'types';
import { limitWords } from 'utils/limit-words';

interface BlogProps {
	post: Post;
}

export default function Blog({ post }: BlogProps) {
	return (
		<>
			<SectionTitle className="my-6">Esto te puede interesar</SectionTitle>
			<Card className="flex flex-col gap-3 border-none bg-primary-500 dark:bg-grayscale-900">
				<div className="flex justify-between items-center">
					<h3 className="font-bold text-3xl text-white">Descubre</h3>
					<span className="rounded-full px-10 py-2 text-sm text-center text-white bg-primary-900 dark:bg-extra-dark">
						<SparklesIcon />
					</span>
				</div>
				<p className="text-white">
					Análisis de proyectos con tecnología del futuro que impulsan
					industrias hacia la innovación
				</p>
				<Outline
					href="/posts"
					className="border border-white text-white hover:bg-grayscale-100 hover:text-primary-500"
				>
					Visitar Blog
				</Outline>
			</Card>
			<SectionTitle className="my-6">Artículo Destacado</SectionTitle>
			<Card className="flex flex-col gap-3 border-none bg-extra-checks dark:bg-grayscale-900">
				<div className="flex justify-between items-center">
					<h3 className="font-bold text-lg text-primary-900 dark:text-white">
						{post.title ?? 'Migrate from Gatsby to Remix'}
					</h3>
					<span className="rounded-full px-10 py-2 text-sm text-center text-white bg-primary-900 dark:bg-extra-dark">
						<Bookmark />
					</span>
				</div>
				<p className="text-grayscale-800 dark:text-white">
					{limitWords({ paragraph: post.description, numWords: 13 }) ??
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus egestas vitae, accumsan, quis euismod convallis. Lorem ipsum dolor sit amet, consectetur.'}
				</p>
				// ! Error: POST NOT FOUND
				<Outline
					href={post ? `/posts/${post.slug}` : '/'}
					className="border border-primary-700 text-primary-700 hover:bg-primary-700 hover:text-grayscale-100 focus:ring-primary-500"
				>
					Leer Artículo
				</Outline>
			</Card>
		</>
	);
}
