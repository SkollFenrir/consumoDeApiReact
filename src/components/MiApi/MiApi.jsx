import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import axios from 'axios';

const MiApi = ({ onData, onNewData }) => {
	const [info, setInfo] = useState(null);
	const [newInfo, setNewInfo] = useState([null]);
	//Render Condicional
	useEffect(() => {
		if (newInfo.length > 0) {
			setInfo(onNewData);
		} else {
			consultInfo();
		}
	}, [newInfo]);
	//Consumo de datos y seteo de informacion
	const consultInfo = async (state) => {
		const consult = await axios.get(
			'https://rickandmortyapi.com/api/character'
		);
		console.log('Muestra de los multiples datos', consult);
		setInfo(consult.data.results);
	};
	//Comunicacion de los datos al componente Padre
	const handlerOnData = () => {
		onData(info);
	};
	// Activacion de la comunicacion 
	useEffect(() => {
		handlerOnData();
		handlerNewInfoData();
	}, [info, onNewData]);
	//Informacion filtrada
	const handlerNewInfoData = (e) => {
		setNewInfo(onNewData);
	};

	return (
		<>
			{info != null
				? info.map((character, i) => (
						<Cards
							key={character.id}
							name={character.name}
							img={character.image}
							status={character.status}
							species={character.species}
							origin={character.origin.name}
						/>
				  ))
				: '...Cargando'}
		</>
	);
};

export default MiApi;
