// * Custom Components
import { SparklesIcon } from 'components/icons';
import { ExternalOutline } from 'components/links/links';
import Card from 'components/cards/tailwind-card';
import SectionTitle from 'components/sections/title-with-star';

export default function Projects() {
	return (
		<>
			<SectionTitle className="my-6">Mis Proyectos Destacados</SectionTitle>
			<Card className="flex flex-col gap-3 mb-6 border-none bg-primary-500 dark:bg-grayscale-900">
				<div className="flex justify-between items-center">
					<h3 className="font-bold text-3xl text-white">Terapist</h3>
					<span className="rounded-full px-10 py-2 text-sm text-center text-white bg-primary-900 dark:bg-extra-dark">
						Fase Beta
					</span>
				</div>
				<p className="text-white">
					Sistema web para la planificación y control de vacunación infantil y
					citas médicas. Ayuda a los médicos a planificar, automatizar y
					controlar vacunas y citas.
				</p>
				<ExternalOutline
					href="https://terapist.deno.dev"
					className="border border-white text-white hover:bg-grayscale-100 hover:text-primary-500"
				>
					Visitar Terapist
				</ExternalOutline>
			</Card>
			<Card className="flex flex-col gap-3 border-none bg-extra-checks dark:bg-grayscale-900">
				<div className="flex justify-between items-center">
					<h3 className="font-bold text-3xl text-primary-900 dark:text-white">
						Refribenco
					</h3>
					<span className="rounded-full px-10 py-2 text-sm text-center text-white bg-primary-900 dark:bg-extra-dark">
						<SparklesIcon />
					</span>
				</div>
				<p className="text-grayscale-800 dark:text-white">
					Empresa especializada en refrigeración industrial con servicio técnico
					y repuestos confiable para neveras, cavas, chillers y aires
					acondicionados.
				</p>
				<ExternalOutline
					href="https://refribenco.com"
					className="border border-primary-900 text-primary-900 hover:bg-primary-700 hover:text-primary-700"
				>
					Visitar Refribenco
				</ExternalOutline>
			</Card>
		</>
	);
}
