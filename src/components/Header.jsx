import React from 'react';
import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components/dist/tailwind';

export default function Header() {
	return (
		<MainHeader>
			<h1 class="text-5xl font-bold text-white font-Poppins text-center">
				Mis Vistos
			</h1>
			<span className="w-100 bg-gray-100 p-px w-4/5 mb-10"></span>
		</MainHeader>
	);
}

const MainHeader = tw.div`
flex
flex-col
justify-center
items-center
gap-5
w-3/5
`;
