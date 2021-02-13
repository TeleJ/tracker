import React from 'react';

import { FaTrash } from 'react-icons/fa';
import classes from './Button.module.css';

const Button = (props) => {
	return (
		<button>
			<FaTrash onClick={props.clicked} size="2em" />
		</button>
	);
	// return <button clicked={props.clicked}>X</button>;
};

export default Button;
