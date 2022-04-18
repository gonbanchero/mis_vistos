import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useFetch from '../hooks/useFetch';

export default function ImgMediaCard() {
	const { data, error } = useFetch(
		`https://api.themoviedb.org/3/discover/movie?api_key=3907f1e02c5af5a6eb040f19d19e5a97&language=es&page=1`
	);

	// console.log(data[1].original_title);

	return (
		<>
			{data.map((item) => (
				<Card sx={{ maxWidth: 345 }}>
					<CardMedia
						component="img"
						alt="green iguana"
						height="140"
						image={
							'https://image.tmdb.org/t/p/w500' +
							item.backdrop_path
						}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{item.original_title}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{item.overview}
						</Typography>
					</CardContent>
					<CardActions>
						<Button size="small">Compartir</Button>
						<Button size="small"></Button>
					</CardActions>
				</Card>
			))}
		</>
	);
}
