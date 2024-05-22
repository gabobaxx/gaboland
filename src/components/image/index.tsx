import { ImgHTMLAttributes } from 'react';

export default function Image(props: ImgHTMLAttributes<HTMLImageElement>) {
	return (
		<img
			src={props.src ?? 'assets/me.jpg'}
			alt={props.alt ?? "Gabriel's Profile Photo"}
			{...props}
			className={`w-52 h-52 rounded-full mx-auto ${props.className ?? ''} `}
		/>
	);
}
