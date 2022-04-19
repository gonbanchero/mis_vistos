import React, { useRef, useState } from 'react';
import tw from 'tailwind-styled-components/dist/tailwind';
import useFetch from '../hooks/useFetch';
import Cards from '../components/Cards';

export default function Agregar() {
	const [busqueda, setBusqueda] = useState();

	const search = useRef();

	const handleSubmit = () => {
		setBusqueda(search.current.value);
	};

	const { data, error } = useFetch(
		`https://api.themoviedb.org/3/search/multi?api_key=3907f1e02c5af5a6eb040f19d19e5a97&language=es&query=${busqueda}&page=1&include_adult=false`
	);

	console.log(data);

	return (
		<div>
			<Container>
				<Input type="text" ref={search}></Input>
				<Button onClick={handleSubmit}>Buscar</Button>
			</Container>
			<ListadoCards>
				{data?.map((item) => (
					<Cards item={item}></Cards>
				))}
			</ListadoCards>
		</div>
	);
}

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
flex
flex-wrap
justify-center
mt-10
mb-20
gap-5

`;
