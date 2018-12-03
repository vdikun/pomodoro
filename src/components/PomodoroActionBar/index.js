import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import StartControl from '../controls/StartControl';
import ToggleControl from '../controls/ToggleControl';
import PauseControl from '../controls/PauseControl';
import pomodoroState from '../../reducers/state';
import styles from './styles';

const PomodoroActionBar = ({ theState }) => {

    if (theState == pomodoroState.DISABLED) {
        return (
            <View style={styles.controlStyle}>
                <StartControl />
            </View>
        );
    } else {
        return (
            <View style={styles.controlStyle}>
                <StartControl />
                <ToggleControl />
                <PauseControl />
            </View>
        );
    }
};

const mapStateToProps = (state) => {
  return {
    theState: state.pomodoro.pomodoroState
  }
};

export default connect(mapStateToProps)(PomodoroActionBar);