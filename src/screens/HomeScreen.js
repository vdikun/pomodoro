import React from 'react';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import PomodoroControl from './../components/PomodoroControl';
import CountdownView from './../components/CountdownView';
import SettingsButton from './../components/SettingsButton';
import pomodoroState from './../reducers/state';

import styles, { Colors } from './../styles/common';

export const HomeScreen = ({ isPomodoro, navigation }) => {
	const { redContainer, greenContainer } = styles;
	const navigateToSettings = () => navigation.navigate('Settings');
	var containerStyle = (isPomodoro) ? redContainer : greenContainer;
	var colors = (isPomodoro) ?
		[ Colors.redMajor, Colors.redMinor ] :
		[ Colors.greenMajor, Colors.greenMinor ];
	return (
			<LinearGradient colors={colors} style={ containerStyle }>
				<CountdownView />
				<PomodoroControl />
				<SettingsButton onPress={() => navigateToSettings()} />
			</LinearGradient>
	);
};

const mapStateToProps = (state) => {
  return {
  	isPomodoro: !(state.pomodoro.pomodoroState == pomodoroState.BREAK)
  }
};

export default connect(mapStateToProps)(HomeScreen);