import React from 'react';
import tw from 'tailwind-styled-components/dist/tailwind';
import PrintCards from '../components/PrintCards.jsx';

export default function ListadoVistos() {
	return (
		<>
			<ListadoCards>
				<PrintCards></PrintCards>
			</ListadoCards>
		</>
	);
}

const ListadoCards = tw.section`
grid
grid-cols-autoFit
mt-10
mb-20
gap-7
w-5/6

`;

// flex
// flex-wrap
// justify-center
