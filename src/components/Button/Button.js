import React from 'react';

import { FaTrash } from 'react-icons/fa';

const Button = (props) => {
	return (
		<button>
			<FaTrash onClick={props.clicked} size="2em" />
		</button>
	);
};

export default Button;
