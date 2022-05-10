import * as React from 'react';
import { useContext } from 'react';
import Contexto from '../context/Contexto';
import tw from 'tailwind-styled-components/dist/tailwind';
import InfoIcon from '@mui/icons-material/Info';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

import { Link } from 'react-router-dom';

export default function CardsToSelect(props) {
	// POPUP INFO
	const [anchorEl, setAnchorEl] = React.useState(null);
	const { setViews, setPuntaje } = useContext(Contexto);

	const handlePopoverOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handlePopoverClose = () => {
		setAnchorEl(null);
	};

	const handleAdd = () => {
		const puntaje = prompt('¿Qué puntale le das a la pelicula?');
		setPuntaje(puntaje);
		setViews(props.item);
	};

	const open = Boolean(anchorEl);
	// POPUP INFO

	return (
		<Card>
			<Image
				src={
					'https://image.tmdb.org/t/p/w500' + props.item.backdrop_path
				}
			></Image>
			<Footer>
				<Titulo>{props.item.title || props.item.name}</Titulo>
				<Info>
					<Typography
						aria-owns={open ? 'mouse-over-popover' : undefined}
						aria-haspopup="true"
						onMouseEnter={handlePopoverOpen}
						onMouseLeave={handlePopoverClose}
					>
						<InfoIcon></InfoIcon>
					</Typography>
					<Popover
						id="mouse-over-popover"
						sx={{
							pointerEvents: 'none',
						}}
						open={open}
						anchorEl={anchorEl}
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'left',
						}}
						transformOrigin={{
							vertical: 'top',
							horizontal: 'left',
						}}
						onClose={handlePopoverClose}
						disableRestoreFocus
					>
						<Typography sx={{ p: 1 }}>
							Fecha de estreno: {props.item.release_date}
						</Typography>
						<Typography sx={{ p: 1 }}>
							Reseña: {props.item.overview}
						</Typography>
					</Popover>
				</Info>
			</Footer>
			<Botones>
				<Boton1 key={props.item.id} onClick={handleAdd}>
					Agregar
				</Boton1>
				<Boton2>
					<Link to={`/movie/${props.item.id}`}>Ver Más</Link>
				</Boton2>
			</Botones>
		</Card>
	);
}

const Card = tw.div`
max-w-Card
`;

const Image = tw.img`
w-full
rounded-t-lg


`;

const Footer = tw.div`
bg-cartFooter
max-h-18
text-white
flex
justify-between
px-5
py-2

`;

const Titulo = tw.h2`
text-center
text-l
font-medium

`;

const Botones = tw.div`
flex
`;

const Boton1 = tw.button`
bg-footerButton
w-full
rounded-bl-lg
px-5
py-2
text-sm
text-center
text-white
cursor-pointer
`;

const Boton2 = tw.button`
bg-footerButton
w-full
rounded-br-lg
px-5
py-1
text-sm
text-center
text-white
cursor-pointer
`;

const Info = tw.div`
`;
