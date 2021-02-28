import React from 'react';

import { FaTrash } from 'react-icons/fa';
import classes from './Button.module.css';

const Button = (props) => {
	return (
		<button>
			<FaTrash className={classes.Button} onClick={props.clicked} size="2em" />
		</button>
	);
};

export default Button;
