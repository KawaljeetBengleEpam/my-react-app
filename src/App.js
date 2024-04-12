import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LeftMenuBar from './components/LeftMenuBar/LeftMenuBar';
import MainPage from './components/MainPage/MainPage';
import Home from './components/Home/Home';

class App extends Component {
	render() {
		return (
			// <div>
			// 	<Home />
			// </div>
			<Router>
				<LeftMenuBar />
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/MainPage' element={<MainPage />} />
					{/* Add more routes as needed */}
				</Routes>
			</Router>
		);
	}
}

export default App;
