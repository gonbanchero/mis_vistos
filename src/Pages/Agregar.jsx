import React, { useRef, useContext } from 'react';
import tw from 'tailwind-styled-components/dist/tailwind';
import CardsToSelect from '../components/CardsToSelect';
import Contexto from '../context/Contexto';

export default function Agregar() {
	const { SearchList, search } = useContext(Contexto);

	const busqueda = useRef();

	const handleSubmit = () => {
		SearchList(busqueda.current.value);
	};

	return (
		<MainContainer>
			<Container>
				<Input type="text" ref={busqueda}></Input>
				<Button onClick={handleSubmit}>Buscar</Button>
			</Container>
			<ListadoCards>
				{search.map((item) => (
					<CardsToSelect item={item} key={item.id}></CardsToSelect>
				))}
			</ListadoCards>
		</MainContainer>
	);
}

const MainContainer = tw.section`
flex
flex-col
w-5/6
justify-center
items-center
`;
const Container = tw.section`
flex
justify-center
items-center
`;

const Input = tw.input`
my-10
mx-5
py-1
`;

const Button = tw.button`
bg-gray-400
px-10
py-1
`;

const ListadoCards = tw.section`
grid
grid-cols-autoFit
mt-10
mb-20
gap-5
w-5/6
`;
