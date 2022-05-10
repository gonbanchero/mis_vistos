import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../Pages/Home.jsx';
import Agregar from '../Pages/Agregar.jsx';
import Movies from '../Pages/Movies';
import UsarContexto from '../context/UsarContexto';

function App() {
	return (
		<UsarContexto>
			<Layout>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/movie/:id" element={<Movies />} />
					<Route exact path="agregar" element={<Agregar />} />
				</Routes>
			</Layout>
		</UsarContexto>
	);
}

export default App;
