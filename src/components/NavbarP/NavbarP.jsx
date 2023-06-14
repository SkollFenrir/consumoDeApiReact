import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Busqueda from '../Busqueda/Busqueda';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarP({ onChangeSearch, list }) {
	const handlerSearch = (e) => {
		const search = e.target.value.toLowerCase();
		const searchFilter = list.filter(
			(c) =>
				c.name.toLowerCase().includes(search) ||
				c.species.toLowerCase().includes(search)
		);
		onChangeSearch(searchFilter);
	};

	return (
		<Navbar
			className='bar3 '
			bg='light'
			variant='light'
			expand='lg'>
			<Container fluid>
				<Navbar.Brand href='https://rickandmortyapi.com/api/character'>
					<img
						src='https://w7.pngwing.com/pngs/479/224/png-transparent-rick-and-morty-rick-sanchez-rick-and-morty-season-3-adult-swim-rick-and-morty-season-2-episode-rick-and-morty-grass-fictional-character-cartoon-thumbnail.png'
						alt=''
						width='35'
						height='35'
						className='d-inline-block align-top'
					/>{' '}
					RickVers
				</Navbar.Brand>
				<Form className='d-flex'>
					<Busqueda
						type={'text'}
						placeholder={'Buscar nombre o especie'}
						onChangeInput={(e) => handlerSearch(e)}
					/>
				</Form>
			</Container>
		</Navbar>
	);
}

export default NavbarP;
