import Badge from 'components/badges/badge';
import TailwindCard from './cards/tailwind-card';

type WorkExperienceProps = {
	title?: string;
	company?: string;
	location?: string;
	years?: string;
};
export default function WorkExperience(props: WorkExperienceProps) {
	const { title, company, location, years } = props;
	return (
		<TailwindCard className="flex flex-col justify-around">
			<h2 className="text-2xl font-bold">{title ?? 'Experience Card'}</h2>
			<p>
				<i style={{ marginRight: 5 + 'px' }} className="bi bi-bank"></i>
				{company ?? 'Company Name'}
			</p>
			<div className="flex justify-between">
				<p>
					<i
						style={{ marginRight: 5 + 'px' }}
						className="bi bi-geo-alt-fill"
					></i>
					{location ?? 'State, Country'}
				</p>
				<Badge>{years ?? '2 years'}</Badge>
			</div>
		</TailwindCard>
	);
}
