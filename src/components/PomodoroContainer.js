import React from 'react';
import { connect } from 'react-redux';
import {
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles, { Colors } from './../styles/common';

export const PomodoroContainer = ({ children, isPomodoro }) => {
    const { redContainer, greenContainer } = styles;
    var containerStyle = (isPomodoro) ? redContainer : greenContainer;
    var colors = (isPomodoro) ?
    	[ Colors.redMajor, Colors.redMinor ] :
    	[ Colors.greenMajor, Colors.greenMinor ];
    return (
        <LinearGradient colors={colors} style={ containerStyle }>
            {children}
        </LinearGradient>
    );
};

const mapStateToProps = (state) => {
  return {
  	isPomodoro: state.pomodoro.isPomodoro
  }
};

export default connect(mapStateToProps)(PomodoroContainer);