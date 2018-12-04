/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';

import HomeScreen from './components/screens/HomeScreen';

import store from './redux/store';

const connectedApp = () => {
	return (
		<Provider store={store}>
			<HomeScreen />
		</Provider>
	);
}

export default connectedApp;