import React from 'react';
import { connect } from 'react-redux';
import { startPomodoro } from './../actions';
import Button from './Button';

const StartButton = ({ onPress }) => {
    return (
        <Button text={"Start Pomodoro"} onPress={() => onPress()} />
    );
};

const mapDispatchToProps = (dispatch) => {
    return { 
        onPress: () => {
            dispatch(startPomodoro());
        }
    }
};

export default connect(null, mapDispatchToProps)(StartButton);