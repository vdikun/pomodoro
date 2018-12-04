import React from 'react';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import PomodoroActionBar from '../PomodoroActionBar';
import TimerView from '../TimerView';
import SettingsControl from '../controls/SettingsControl';
import pomodoroState from '../../redux/state';

import styles, { Colors } from './../styles';

export const HomeScreen = ({ isPomodoro, navigation }) => {
	const { redContainer, greenContainer } = styles;
	var containerStyle = (isPomodoro) ? redContainer : greenContainer;
	var colors = (isPomodoro) ?
		[ Colors.redMajor, Colors.redMinor ] :
		[ Colors.greenMajor, Colors.greenMinor ];
	return (
			<LinearGradient colors={colors} style={ containerStyle }>
				<TimerView />
				<PomodoroActionBar />
				<SettingsControl />
			</LinearGradient>
	);
};

const mapStateToProps = (state) => {
  return {
  	isPomodoro: !(state.pomodoro.pomodoroState == pomodoroState.BREAK)
  }
};

export default connect(mapStateToProps)(HomeScreen);