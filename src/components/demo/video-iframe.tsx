import { HTMLAttributes } from 'react';

export default function VideoIframe(props: HTMLAttributes<HTMLIFrameElement>) {
	return (
		<iframe
			{...props}
			className={`w-full min-h-52 md:min-h-96 mx-auto border-2 border-grayscale-900 rounded-[1.25rem] ${
				props.className ?? ''
			}`}
			src="https://www.youtube.com/embed/tgbNymZ7vqY"
		></iframe>
	);
}
