import React from 'react';
import tw from 'tailwind-styled-components/dist/tailwind';
import Cards from '../components/PrintCards.jsx';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function ListadoVistos() {
	return (
		<>
			<Link to="agregar">
				<Button variant="outlined">Agregar +</Button>{' '}
			</Link>
			<ListadoCards>
				<Cards></Cards>
			</ListadoCards>
		</>
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
