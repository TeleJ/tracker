import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import About from './components/About/About';
import Login from './components/Login/Login';
import MyList from './components/MyList/MyList';

import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<Switch>
					<Route path="/about" exact component={About} />
					<Route path="/login" exact component={Login} />
					<Route path="/" component={MyList} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
