import React from 'react';
import tw from 'tailwind-styled-components/dist/tailwind';
import Header from '../components/Header';

export default function Layout(props) {
	const { children } = props;
	return (
		<MainLayout>
			<Header />
			{children}
		</MainLayout>
	);
}

const MainLayout = tw.div`
bg-gray-800
min-h-screen
min-w-screen
flex
flex-col
justify-start
items-center
`;
