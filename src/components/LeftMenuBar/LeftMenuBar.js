// LeftMenuBar.js
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../redux/store.js';
import Counter from '../Counter/Counter';

const LeftMenuBar = () => {
	return (
		<Provider store={store}>
			<div>
				<h1>React-Redux Counter App</h1>
				<Counter />
			</div>
		</Provider>
	);
};

export default LeftMenuBar;
