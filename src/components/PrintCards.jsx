import * as React from 'react';
import useFetch from '../hooks/useFetch';
import Cards from './Cards.jsx';

export default function ImgMediaCard() {
	const { data, error } = useFetch(
		`https://api.themoviedb.org/3/discover/movie?api_key=3907f1e02c5af5a6eb040f19d19e5a97&language=es&page=1`
	);

	return (
		<>
			{data?.map((item) => (
				<Cards item={item}></Cards>
			))}
		</>
	);
}
