import React from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import styles from './../styles/common';

const Button = ({ onPress, isPomodoro }) => {
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

export default connect(mapStateToProps)(Button);