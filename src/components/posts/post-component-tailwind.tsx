import { Bookmark } from 'components/icons';
import { Outline } from 'components/links/links';
import Card from 'components/cards/tailwind-card';
// * Utils & Types
import type { Post } from 'types';
import { limitTextToFirstDot } from 'utils/limit-words';

export default function PostComponent({ post }: { post: Post }) {
	return (
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
				{limitTextToFirstDot({ paragraph: post.description }) ??
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus egestas vitae, accumsan, quis euismod convallis. Lorem ipsum dolor sit amet, consectetur.'}
			</p>
			<Outline
				href={post ? `/posts/${post.slug}` : '/'}
				className="border border-primary-700 text-primary-700 hover:bg-primary-700 hover:text-grayscale-100 focus:ring-primary-500"
			>
				Leer Artículo
			</Outline>
		</Card>
	);
}
