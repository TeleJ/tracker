import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Navbar.module.css';
import logo from '../../static/logo.svg';

const Navbar = () => {
	return (
		<div className="Navbar">
			<header>
				<nav>
					<img src={logo} alt="" />
					<ul>
						<li>
							<NavLink
								to="/"
								exact
								className={classes.Home}
								activeStyle={{ color: '#b50b0b', textDecoration: 'underline' }}
							>
								My List
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/about"
								exact
								className={classes.About}
								activeStyle={{ color: '#b50b0b', textDecoration: 'underline' }}
							>
								About
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/login"
								exact
								className={classes.Login}
								activeStyle={{ color: '#b50b0b', textDecoration: 'underline' }}
							>
								Login
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
};

export default Navbar;
