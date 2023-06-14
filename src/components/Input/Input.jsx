import React from 'react';
import Form from 'react-bootstrap/Form';

function Input({ placeholder, type, onChangeInput }) {
	//onChangeInput comunica con el componente Padre. Ayuda a tener una comunicacion directa, corrigiendo el delay.
	return (
		<Form.Control
			type={type}
			placeholder={placeholder}
			onChange={(e) => onChangeInput(e)}
		/>
	);
}

export default Input;
