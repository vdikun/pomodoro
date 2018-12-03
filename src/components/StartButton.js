import React from 'react';
import { connect } from 'react-redux';
import { startPomodoro, stopPomodoro } from './../actions';
import Button from './Button';
import pomodoroState from './../reducers/state';

const StartButton = ({ theState, startFn, stopFn }) => {
    let buttonText = (theState == pomodoroState.DISABLED) ? "Start Pomodoro" : "Stop Pomodoro";
    let onPress = (theState == pomodoroState.DISABLED) ? startFn : stopFn;
    return (
        <Button text={ buttonText } onPress={() => onPress()} />
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