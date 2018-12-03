import React from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';
import styles from './styles';

const Button = ({ onPress, text }) => {

    const { buttonStyle, buttonTextStyle } = styles;

    return (
        <TouchableOpacity style={ buttonStyle } onPress={ () => { onPress() } }>
            <Text style={ buttonTextStyle }>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;