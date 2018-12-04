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

import HomeScreen from './components/screens/HomeScreen';
import SettingsScreen from './components/screens/SettingsScreen';

import store from './redux/store';

const App = StackNavigator({
	Home: { screen: HomeScreen },
	Settings: { screen: SettingsScreen }
});

const connectedApp = () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
}

export default connectedApp;