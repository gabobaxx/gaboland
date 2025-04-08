import Image from 'components/image';
import { StarIcon } from '@heroicons/react/24/solid';
import TailwindSectionTitle from 'components/sections/tailwind-title';

export default function GPHero() {
	return (
		<>
			<div className="flex mt-6 min-h-56 max-w-sm md:max-w-screen-md relative left-0 top-0">
				<TailwindSectionTitle className="rounded-full w-10/12 absolute top-0 left-10 z-10">
					<StarIcon className="h-4 w-4 md:h-6 md:w-62 text-xs md:text-base text-primary-700" />
					<p className="font-bold text-xs md:text-base text-primary-700">
						Who am I?
					</p>
				</TailwindSectionTitle>
				<Image className="w-40 h-40 md:w-52 md:h-52 absolute -z-10 top-4" />
				<p className="font-bold text-xs absolute w-[50%] top-14 left-[10.5rem] md:text-base md:top-16 md:left-60">
					Me llamo Gabriel Bencomo y soy Ingeniero en Sistemas, egresado de la
					Universidad Santa Maria, Barinas, Venezuela. Con +4 años de
					experiencia en desarrollo de software web, IA, marketing y ventas.
				</p>
			</div>
			<p className="font-bold text-xs md:text-base mt-4">
				Actualmente, me dedico a crear sistemas y procesos automatizados predecibles de crecimiento y captacion de clientes para marcas de tecnologia. Los cuales, primero se ponen a prueba a traves de mis propias marcas como Terapist, Gaboland y
				Refribenco para que mis clientes disfruten de un sistema eficaz y eficiente de crecimiento exponencial en el menor tiempo posible.
			</p>
		</>
	);
}
