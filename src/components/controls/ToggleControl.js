import React from 'react';
import { connect } from 'react-redux';
import { togglePomodoro } from './../../redux/actions';
import ResponsiveIcon, { iconNames } from '../common/ResponsiveIcon';
import { playSound } from './../../utils/sound';

import pomodoroState from './../../redux/state';

const ToggleButton = ({ onPress, theState, tones }) => {
    if (theState == pomodoroState.DISABLED) {
        return null;
    }
    let tone = (theState == pomodoroState.BREAK) ? tones.workTone : tones.breakTone;
    return (
        <ResponsiveIcon iconName={iconNames.TOGGLE} onPress={() => {
            playSound(tone);
            onPress();
        }} />
    );
};

const mapStateToProps = (state) => {
  return {
    theState: state.pomodoro.pomodoroState,
    tones: state.tones
  }
};

const mapDispatchToProps = (dispatch) => {
    return { 
        onPress: () => {
            dispatch(togglePomodoro());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleButton);