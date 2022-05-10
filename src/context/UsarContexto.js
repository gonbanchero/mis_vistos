import Contexto from './Contexto';
import { useReducer, useState } from 'react';
import Reducer from './Reducer';
import axios from 'axios';

export default function UsarContexto(props) {
	const { children } = props;

	const estadoInicial = {
		views: [],
		alias: '',
	};

	const [search, setSearch] = useState([]);
	const [state, dispatch] = useReducer(Reducer, estadoInicial);

	const SearchList = async (busqueda) => {
		const res = await axios.get(
			`https://api.themoviedb.org/3/search/multi?api_key=3907f1e02c5af5a6eb040f19d19e5a97&language=es&query=${busqueda}&page=1&include_adult=false`
		);

		const filter = res.data.results.filter(
			(movie) => movie.backdrop_path !== null
		);

		setSearch(filter);
	};

	const setViews = (item) => {
		dispatch({ type: 'SET_VIEWS', payload: item });

		localStorage.setItem('views', JSON.stringify(state));
	};

	const setAlias = (alias) => {
		dispatch({ type: 'SET_ALIAS', payload: alias });
		localStorage.setItem('alias', JSON.stringify(state));
	};

	const setPuntaje = (puntaje) => {
		console.log(puntaje);
		state.views.pepe = puntaje;

		dispatch({
			type: 'SET_PUNTAJE',
			payload: puntaje,
		});
		// localStorage.setItem('puntaje', JSON.stringify(state));
	};

	console.log(state);

	return (
		<Contexto.Provider
			value={{
				views: estadoInicial.views,
				alias: estadoInicial.alias,
				setAlias,
				setViews,
				SearchList,
				search,
				setPuntaje,
			}}
		>
			{children}
		</Contexto.Provider>
	);
}
