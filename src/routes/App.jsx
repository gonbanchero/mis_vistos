import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../Pages/Home.jsx';
import Agregar from '../Pages/Agregar.jsx';

function App() {
	return (
		<Layout>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="agregar" element={<Agregar />} />
			</Routes>
		</Layout>
	);
}

export default App;
