import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cards.css';

const Cards = ({
	id = '1',
	name = 'Rick Sanchez',
	img = 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
	status = 'Alive',
	species = 'Human',
	origin = 'Earth (C-137)',
}) => {
	return (
		<Card
			key={id}
			className='card'>
			<Card.Img
				className='cardImg'
				variant='top'
				src={img}
			/>
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<Card.Text>
					{status} - {species}
				</Card.Text>
				<Card.Text>Origin: {origin}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Cards;
