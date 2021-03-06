import React, { useContext, useRef } from 'react';
import tw from 'tailwind-styled-components/dist/tailwind';
import { blue } from '@mui/material/colors';
import Icon from '@mui/material/Icon';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { UsarContexto } from '../context/UsarContexto';
import Contexto from '../context/Contexto';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 500,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 5,
};

export default function Header() {
	const { setAlias, views } = useContext(Contexto);

	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const navigate = useNavigate();

	const busqueda = useRef();

	const handleSubmit = () => {
		setAlias(busqueda.current.value);
		navigate('/agregar');
		handleClose();
	};

	const enterHandler = (e) => {
		if (e.key === 'Enter' || e.keyCode === 13) handleSubmit();
	};

	const thisLocation = useLocation();

	return (
		<MainContainer>
			<MainHeader>
				<h1 className="text-5xl font-bold text-white font-Poppins text-left py-5 ">
					<Link to="/">Mis Vistos</Link>
				</h1>
				{thisLocation.pathname === '/' ? (
					<Icon
						sx={{
							fontSize: 40,
							color: blue[500],
							paddingTop: 0.4,
						}}
						onClick={() => {
							if (views.length === 0) {
								handleOpen();
							} else navigate('/agregar');
						}}
					>
						add_circle
					</Icon>
				) : (
					<HomeIcon
						sx={{
							fontSize: 40,
							color: blue[500],
							paddingTop: 0.4,
						}}
						onClick={() => {
							navigate('/');
						}}
					>
						add_circle
					</HomeIcon>
				)}

				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Box sx={style}>
						<Typography
							id="modal-modal-title"
							variant="h6"
							component="h2"
							align="center"
						>
							??Qu?? alias le vas a poner a tus puntajes? (por
							ejemplo "pepitos")
						</Typography>
						<Div>
							<Input
								type="text"
								ref={busqueda}
								onKeyUp={enterHandler}
							></Input>
							<Button onClick={handleSubmit}>Agregar</Button>
						</Div>
						{/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
							Duis mollis, est non commodo luctus, nisi erat
							porttitor ligula.
						</Typography> */}
					</Box>
				</Modal>
			</MainHeader>
		</MainContainer>
	);
}

const MainContainer = tw.div`
flex
flex-col
justify-center
items-center
gap-5
w-full
bg-mui
`;

const MainHeader = tw.div`
w-5/6
flex
items-center
justify-between
`;

const Div = tw.div`
flex
py-5
justify-around
items-center
`;

const Input = tw.input`
p-0.5
border-2
border-solid
border-black
`;

const Button = tw.button`
bg-gray-400
px-10
py-1
`;
