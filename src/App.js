import './App.css';
import { useState } from 'react';
import MiApi from './components/MiApi/MiApi';
import NavbarP from './components/NavbarP/NavbarP';
import Footer from './components/Footer/Footer';

function App() {
	// Comunicacion con componentes hijos
	const [result, setResult] = useState([]);
	const [list, setList] = useState([]);
	const handlerSerch = (data) => {
		setResult(data);
	};
	const handlerInfoData = (data) => {
		setList(data);
	};
	return (
		<div>
			<NavbarP
				className='nav'
				onChangeSearch={(e) => handlerSerch(e)}
				list={list}
			/>
			<div className='App'>
				<MiApi
					onData={(e) => handlerInfoData(e)}
					onNewData={result}
				/>
			</div>
			<Footer
				title={'Rick & Morty'}
				description={'Todos los derechos reservados ©'}
			/>
		</div>
	);
}

export default App;
