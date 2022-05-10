import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import tw from 'tailwind-styled-components/dist/tailwind';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

export default function Movies() {
	const [movie, setMovie] = useState();
	const { id } = useParams();

	useEffect(() => {
		const fetch = async () => {
			const response = await axios.get(
				`https://api.themoviedb.org/3/movie/${id}?api_key=3907f1e02c5af5a6eb040f19d19e5a97&language=es`
			);
			setMovie(response.data);
		};
		fetch();
	}, []);

	const navigate = useNavigate();

	return (
		<Container>
			<Izquierda>
				<img
					src={'https://image.tmdb.org/t/p/w500' + movie?.poster_path}
					srcSet={
						'https://image.tmdb.org/t/p/w500' + movie?.poster_path
					}
					alt={movie?.original_title}
					loading="lazy"
				/>
			</Izquierda>
			<Derecha>
				<Titulo>{movie?.original_title || movie?.name}</Titulo>
				<Fecha>Fecha de estreno: {movie?.release_date}</Fecha>
				<Reseña>{movie?.overview}</Reseña>
				<Button size="small" onClick={() => navigate(-1)}>
					Volver
				</Button>{' '}
			</Derecha>
		</Container>
	);
}

const Container = tw.section`
flex
w-3/6
`;

const Izquierda = tw.div`
min-w-[40%]
p-5
`;

const Derecha = tw.div`
min-w-[60%]
p-5
flex
flex-col

`;

const Titulo = tw.h1`
text-5xl	
text-center
text-white
mt-10
mb-5
`;

const Reseña = tw.p`
text-xl
text-center
text-white
font-light
p-5
`;

const Fecha = tw.p`
text-sm
text-white
text-center
font-extralight		
`;
