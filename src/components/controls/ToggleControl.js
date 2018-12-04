import React from 'react';
import { connect } from 'react-redux';
import { togglePomodoro } from './../../redux/actions';
import ResponsiveIcon, { iconNames } from '../common/ResponsiveIcon';

import pomodoroState from './../../redux/state';

const ToggleButton = ({ onPress, theState }) => {
    if (theState == pomodoroState.DISABLED) {
        return null;
    }
    const iconName = iconNames.TOGGLE; 
    return (
        <ResponsiveIcon iconName={iconName} onPress={() => onPress()} />
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