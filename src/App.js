/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';

import store from './store';

const App = StackNavigator({
	HomeScreen: { screen: HomeScreen }
});

const connectedApp = () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
}

export default connectedApp;