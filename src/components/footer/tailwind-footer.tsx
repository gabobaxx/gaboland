import { HTMLAttributes } from 'react';

export default function Footer(props: HTMLAttributes<HTMLElement>) {
	return (
		<footer
			{...props}
			className={`w-full flex p-6 gap-6 text-base text-center justify-around ${
				props.className ?? ''
			}`}
		/>
	);
}

// 		color: 'gs100',
// 		fontWeight: 'bold',
// 		links: {
// 			width: '100%',
// 			alignItems: 'center',
// 			justifyContent: 'space-between',
// 			a: {
// 				color: 'GS300',
// 				fontSize: '18px',
// 				borderColor: 'GS300',
// 				':hover': {
// 					color: '#ffffff',
// 					borderColor: '#ffffff',
// 				},
// 			},
// 		},
// 	},
