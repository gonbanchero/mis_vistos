import React from 'react';
import tw from 'tailwind-styled-components/dist/tailwind';
import Cards from './Cards.jsx';

export default function ListadoVistos() {
	return (
		<ListadoCards>
			<Cards></Cards>
		</ListadoCards>
	);
}

const ListadoCards = tw.section`
flex
flex-wrap
justify-center
mt-10
mb-20
gap-5

`;
