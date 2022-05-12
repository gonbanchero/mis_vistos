import * as React from 'react';
import { useContext } from 'react';
import Contexto from '../context/Contexto';
import tw from 'tailwind-styled-components/dist/tailwind';
import InfoIcon from '@mui/icons-material/Info';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Imagen from '../img/contemplative-reptile.jpg';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';

//RATING
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

export default function CardsToSelect(props) {
	// POPUP INFO
	const [anchorEl, setAnchorEl] = React.useState(null);
	const { setViews } = useContext(Contexto);

	const handlePopoverOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handlePopoverClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	// POPUP INFO

	//POPUP RATING STATES
	const [open2, setOpen2] = React.useState(false);
	const handleOpen2 = () => setOpen2(true);
	const handleClose2 = () => setOpen2(false);

	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: 24,
		p: 4,
	};

	//POPUP RATING STATES
	const [score, setScore] = React.useState(2);
	const [hover, setHover] = React.useState(-1);

	const handleAdd = (score) => {
		const itemScore = { ...props.item, puntaje: score };
		setViews(itemScore);
	};

	//RATING LOGICS

	return (
		<div>
			<Card>
				{props.item.backdrop_path === undefined ? (
					<Image src={Imagen}></Image>
				) : (
					<Image
						src={
							'https://image.tmdb.org/t/p/w500' +
							props.item.backdrop_path
						}
					></Image>
				)}

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
					<Boton1 key={props.item.id} onClick={handleOpen2}>
						Agregar
					</Boton1>
					<Boton2>
						<Link to={`/movie/${props.item.id}`}>Ver Más</Link>
					</Boton2>
				</Botones>
			</Card>

			<Modal
				open={open2}
				onClose={handleClose2}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					{' '}
					<Box
						sx={{
							width: 320,
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
							gap: '10px',
						}}
					>
						<Typography>
							¿Qué puntaje querés darle a ésta pelicula?
						</Typography>
						<Rating
							name="hover-feedback"
							value={score}
							precision={0.5}
							// getLabelText={getLabelText}
							onChange={(event, newValue) => {
								setScore(newValue);
								handleAdd(newValue);
								handleClose2();
							}}
							onChangeActive={(event, newHover) => {
								setHover(newHover);
							}}
							emptyIcon={
								<StarIcon
									style={{ opacity: 0.55 }}
									fontSize="inherit"
								/>
							}
						/>
					</Box>
				</Box>
			</Modal>
		</div>
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

const Info = tw.div``;
