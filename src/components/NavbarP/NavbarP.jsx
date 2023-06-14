import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Input from '../Input/Input';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavbarP({ onChangeSearch, list }) {
	const [searchResult, setSearchResult] = useState([]);
	const handlerSearch = (e) => {
		const search = e.target.value.toLowerCase();
		const searchFilter = list.filter((c) =>
			c.name.toLowerCase().includes(search) ||
			c.species.toLowerCase().includes(search)
		);
		onChangeSearch(searchFilter);
		//onSearchResult(searchFilter);
		console.log('searchFilter', searchFilter); //Necesitas pasar estos resultados a MiApi
	};
	
	return (
		<Navbar
			className='bar3'
			bg='light'
			variant='light'
			expand='lg'>
			<Container fluid>
				<Navbar.Brand href='https://rickandmortyapi.com/api/character'>
					RickVers
				</Navbar.Brand>
				<Form className='d-flex'>
					<Input
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
