import { SocialLinks as social } from 'config';

export default function FooterSocialLinks() {
	const links = [
		{
			href: social.github,
			icon: 'github',
		},
		{
			href: social.twitter,
			icon: 'twitter-x',
		},
		{
			href: social.linkedin,
			icon: 'linkedin',
		},
		{
			href: social.instagram,
			icon: 'instagram',
		},
	];

	return (
		<>
			{links.map((link) => (
				<a
					target="_blank"
					href={link.href}
					rel="noopener noreferrer"
					className="text-2xl border-primary-700 hover:border-primary-500 dark:border-grayscale-300 dark:hover:border-grayscale-100"
				>
					<i className={`bi bi-${link.icon}`}></i>
				</a>
			))}
		</>
	);
}
