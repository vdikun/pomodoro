import React from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { togglePomodoro } from './../actions';
import styles from './../styles/common';

const ToggleButton = ({ onPress, isPomodoro }) => {
    const buttonText = () => {
        if (isPomodoro) {
            return "Stop pomodoro";
        } else {
            return "Pomodoro";
        }
    };

    const { buttonStyle, buttonTextStyle } = styles;

    return (
        <TouchableOpacity style={ buttonStyle } onPress={ () => { onPress() } }>
            <Text style={ buttonTextStyle }>
                {buttonText()}
            </Text>
        </TouchableOpacity>
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