import VideoIframe from 'components/demo/video-iframe';
// import { HTMLAttributes } from 'react';

export default function TailwindCard(/*props: HTMLAttributes<HTMLDivElement>*/) {
	return (
		<>
			<h1 className="text-lg md:text-3xl font-bold text-center">
				LA TECNICA PROBADA DE 3 PASOS PARA DUPLICAR (X2) LOS CLIENTES DE UNA
				MARCA DE TECNOLOGIA EN MENOS DE 3 MESES
			</h1>
			<h2 className="text-sm md:text-sm font-bold text-center">
				(SIN NECESIDAD DE GASTAR MILES DE DOLARES EN PUBLICIDAD Y MARKETING SIN
				PROPOSITO)
			</h2>
			<VideoIframe className="mt-6" />
		</>
	);
}
