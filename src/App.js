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
import SettingsScreen from './screens/SettingsScreen';

import store from './store';

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