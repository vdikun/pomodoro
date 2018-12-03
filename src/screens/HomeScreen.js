import React from 'react';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import ToggleButton from './../components/ToggleButton';
import CountdownView from './../components/CountdownView';

import styles, { Colors } from './../styles/common';

export const HomeScreen = ({ isPomodoro, navigation }) => {
    const { redContainer, greenContainer } = styles;
    var containerStyle = (isPomodoro) ? redContainer : greenContainer;
    var colors = (isPomodoro) ?
    	[ Colors.redMajor, Colors.redMinor ] :
    	[ Colors.greenMajor, Colors.greenMinor ];
    return (
        <LinearGradient colors={colors} style={ containerStyle }>
					<CountdownView />
					<ToggleButton />
        </LinearGradient>
    );
};

const mapStateToProps = (state) => {
  return {
  	isPomodoro: state.pomodoro.isPomodoro
  }
};

export default connect(mapStateToProps)(HomeScreen);