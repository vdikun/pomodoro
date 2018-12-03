import React from 'react';
import { connect } from 'react-redux';
import { togglePomodoro } from './../actions';
import ControlIcon from './ControlIcon';

import pomodoroState from './../reducers/state';

const ToggleButton = ({ onPress, theState }) => {
    if (theState == pomodoroState.DISABLED) {
        return null;
    }
    //let buttonText = (theState == pomodoroState.WORK)? "Start Break" : "End Break";
    let iconName = "chevron-circle-right"; 
    return (
        <ControlIcon iconName={iconName} onPress={() => onPress()} />
    );
};

const mapStateToProps = (state) => {
  return {
    theState: state.pomodoro.pomodoroState
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