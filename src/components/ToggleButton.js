import React from 'react';
import { connect } from 'react-redux';
import { togglePomodoro } from './../actions';
import Button from './Button';

const ToggleButton = ({ onPress, isPomodoro }) => {
    let buttonText;
    if (isPomodoro) {
        buttonText = "Start Break";
    } else {
        buttonText = "Start Pomodoro";
    }

    return (
        <Button text={buttonText} onPress={() => onPress()} />
    );
};

const mapStateToProps = (state) => {
  return {
    isPomodoro: state.pomodoro.isPomodoro
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