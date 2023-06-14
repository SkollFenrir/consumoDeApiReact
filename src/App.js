import './App.css';
import { useState } from 'react';
import MiApi from './components/MiApi/MiApi';
import NavbarP from './components/NavbarP/NavbarP';

function App() {
	// Intento de comunicar los componentes hijos
	const [savedInfo, setSavedInfo] = useState([]);
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
				onChangeSearch={(e) => handlerSerch(e)}
				list={list}
				
			/>
			<div className='App'>
				<MiApi
					onData={(e) => handlerInfoData(e)}
					onNewData={result}
				/>
			</div>
		</div>
	);
}

export default App;
