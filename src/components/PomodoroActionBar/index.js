import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import StartControl from '../controls/StartControl';
import ToggleControl from '../controls/ToggleControl';
import PauseControl from '../controls/PauseControl';
import pomodoroState from '../../redux/state';
import styles from './styles';

const PomodoroActionBar = ({ theState }) => {
    return (
        <View style={styles.barStyle}>
            <StartControl />
            {(theState == pomodoroState.DISABLED)?
              null :
              <View style={styles.barStyle}>
                <ToggleControl />
                <PauseControl />
              </View>}
        </View>
    );
};

const mapStateToProps = (state) => {
  return {
    theState: state.pomodoro.pomodoroState
  }
};

export default connect(mapStateToProps)(PomodoroActionBar);