import TailwindCard from 'components/cards/tailwind-card';
import TailwindSectionTitle from 'components/sections/tailwind-title';
import ArrowDownCircle from 'components/icons/ArrowDownCircle';

export default function CallAgenda() {
	return (
		<>
			<TailwindSectionTitle className="mt-6 justify-center items-center">
				<p className="font-bold text-xs md:text-base text-primary-700">
					AGENDA UNA LLAMADA ABAJO
				</p>
				<ArrowDownCircle className="h-6 w-6 text-xs md:text-base text-primary-700" />
			</TailwindSectionTitle>
			<TailwindCard className="mt-6 border-0 border-transparent flex justify-center items-center bg-grayscale-900">
				<p className="font-bold text-xs md:text-base">EVENTO EN CALENDLY</p>
			</TailwindCard>
		</>
	);
}
