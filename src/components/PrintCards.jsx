import * as React from 'react';
import Cards from './Cards.jsx';
import tw from 'tailwind-styled-components/dist/tailwind';

export default function PrintCards() {
	const viewsLocal = localStorage.getItem('state');
	const views = JSON.parse(viewsLocal);

	return (
		<>
			{views ? (
				views.views.map((item) => (
					<Cards item={item} key={item.id}></Cards>
				))
			) : (
				<BienvenidaContainer>
					<Titulo>Bienvenido a "Mis Vistos"</Titulo>
					<Texto>
						En esta App podrás agregar tus peliculas o series vistas
						para que cuando te pregunten "¿Qué me recomendás para
						mirar?" tengas tus favoritos siempre a mano.
					</Texto>
				</BienvenidaContainer>
			)}
		</>
	);
}

const BienvenidaContainer = tw.div`
flex
justify-center
flex-col
w-1/2
m-0auto
`;

const Titulo = tw.h1`
text-white
text-center
text-3xl
my-5
`;

const Texto = tw.p`
text-white
text-center
text-xl

`;
