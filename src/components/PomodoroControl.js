import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import StartButton from './StartButton';
import ToggleButton from './ToggleButton';
import PauseButton from './PauseButton';
import pomodoroState from './../reducers/state';
import styles from './../styles/components/PomodoroControl.style';

const PomodoroControl = ({ theState }) => {

    if (theState == pomodoroState.DISABLED) {
        return (
            <View style={styles.controlStyle}>
                <StartButton />
            </View>
        );
    } else {
        return (
            <View style={styles.controlStyle}>
                <StartButton />
                <ToggleButton />
                <PauseButton />
            </View>
        );
    }
};

const mapStateToProps = (state) => {
  return {
    theState: state.pomodoro.pomodoroState
  }
};

export default connect(mapStateToProps)(PomodoroControl);