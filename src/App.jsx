import tw from 'tailwind-styled-components/dist/tailwind';
import ListadoVistos from './components/ListadoVistos.jsx';

function App() {
	return (
		<>
			<MainLayout>
				<Header>
					<h1 class="text-5xl font-bold text-white font-Poppins text-center">
						Mis Vistos
					</h1>
					<button className="bg-gray-200 px-10 py-1">
						Agregar +
					</button>
					<span className="w-100 bg-gray-100 p-px w-4/5"></span>
				</Header>
				<ListadoVistos />
			</MainLayout>
		</>
	);
}

const MainLayout = tw.div`
bg-gray-800
min-h-screen
min-w-screen
flex
flex-col
justify-center
items-center
`;

const Header = tw.div`
flex
flex-col
justify-center
items-center
gap-5
w-3/5
`;

export default App;
