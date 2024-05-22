import { ReactElement } from 'react';

interface HeroProps {
	children?: ReactElement;
	name?: string;
	location?: string;
	occupation?: string;
	srcImage?: string;
}
export default function TailwindHero(props: HeroProps) {
	return (
		<div className="flex flex-col text-center items-center gap-4">
			<img
				src="assets/me.jpg"
				alt={`${props.name ?? 'Gabriel'}'s Profile Photo`}
				className="w-52 h-52 rounded-full"
			/>
			{props.children ? (
				props.children
			) : (
				<div>
					{props.name && (
						<h2 className="text-4xl md:text-5xl font-bold">{props.name}</h2>
					)}
					{props.occupation && (
						<h3 className="text-base md:text-2xl font-normal">
							{props.occupation}
						</h3>
					)}
					{props.location && (
						<h4>
							<i
								style={{ marginRight: 5 + 'px' }}
								className="bi bi-geo-alt-fill"
							></i>
							{props.location}
						</h4>
					)}
				</div>
			)}
		</div>
	);
}
