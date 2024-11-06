// * Custom Components
import Image from 'components/image';
import { StarIcon } from '@heroicons/react/24/solid';
import SectionTitle from 'components/sections/title-with-star';
import { Outline } from 'components/links/links';

export default function Hero() {
	return (
		<>
			<div className="flex mt-6 min-h-56 max-w-sm md:max-w-screen-md relative left-0 top-0">
				<SectionTitle className="rounded-full w-10/12 absolute top-0 left-10 z-10">
					<StarIcon className="h-4 w-4 md:h-6 md:w-62 text-xs md:text-base text-primary-700" />
					<p className="font-bold text-xs md:text-base text-primary-700">
						¿Quién soy?
					</p>
				</SectionTitle>
				<Image className="w-40 h-40 md:w-52 md:h-52 absolute -z-10 top-4" />
				<p className="font-bold text-xs absolute w-[50%] top-14 left-[10.5rem] md:text-base md:top-16 md:left-60">
					Me llamo Gabriel Bencomo y soy Ingeniero en Sistemas, egresado de la
					Universidad Santa Maria, Barinas, Venezuela. Con +4 años de
					experiencia en desarrollo de software web, IA, marketing y ventas.
				</p>
			</div>
			<p className="font-bold text-xs md:text-base mt-4">
				Soy especialista en la creación de sistemas automatizados y predecibles
				de crecimiento y captación de clientes para marcas tecnológicas.
			</p>
			<p className="font-bold text-xs md:text-base mt-4">
				Mis sistemas no solo impulsan el crecimiento de mis clientes, sino que
				también generan ganancias significativas. Antes de ofrecerlos al
				público, los pongo a prueba rigurosamente en mis propias marcas, como
				Gaboland, Terapist y Refribenco.
			</p>
			<p className="font-bold text-xs md:text-base mt-4">
				De esta manera, puedo garantizar que mis clientes disfruten de un
				sistema eficaz y eficiente que les permita alcanzar un crecimiento
				significativo en el menor tiempo posible.
			</p>
			<Outline
				href={'/'}
				className="border my-6 border-primary-700 text-primary-700 hover:bg-primary-700 hover:text-grayscale-100 focus:ring-primary-500"
			>
				Próximamente Conocer Sistemas
			</Outline>
		</>
	);
}
