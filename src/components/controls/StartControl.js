import React from 'react';
import { connect } from 'react-redux';
import { startPomodoro, stopPomodoro } from '../../actions';
import ResponsiveIcon, { iconNames } from '../common/ResponsiveIcon';
import pomodoroState from '../../reducers/state';

const StartButton = ({ theState, startFn, stopFn }) => {
    let iconName = (theState == pomodoroState.DISABLED) ? iconNames.START : iconNames.STOP;
    let onPress = (theState == pomodoroState.DISABLED) ? startFn : stopFn;
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
        startFn: () => {
            dispatch(startPomodoro());
        },
        stopFn: () => {
            dispatch(stopPomodoro());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(StartButton);