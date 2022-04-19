import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Cards(props) {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				component="img"
				alt="green iguana"
				height="140"
				image={
					'https://image.tmdb.org/t/p/w500' + props.item.backdrop_path
				}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{props.item.title || props.item.name}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{props.item.overview}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Compartir</Button>
				<Button size="small"></Button>
			</CardActions>
		</Card>
	);
}
