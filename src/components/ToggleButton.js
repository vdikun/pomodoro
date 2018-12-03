import React from 'react';
import { connect } from 'react-redux';
import { togglePomodoro } from './../actions';
import Button from './Button';

import pomodoroState from './../reducers/state';

const ToggleButton = ({ onPress, isBreakTime }) => {
    let buttonText;
    if (!isBreakTime) {
        buttonText = "Start Break";
    } else {
        buttonText = "End Break";
    }

    return (
        <Button text={buttonText} onPress={() => onPress()} />
    );
};

const mapStateToProps = (state) => {
  return {
    isBreakTime: (state.pomodoro.pomodoroState == pomodoroState.BREAK)
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