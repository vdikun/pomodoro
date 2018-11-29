import React from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import styles from './../styles/common';

const Button = ({ children, onPress }) => {
    const { buttonStyle, buttonTextStyle } = styles;
    return (
        <TouchableOpacity style={ buttonStyle } onPress={ () => { onPress() } }>
            <Text style={ buttonTextStyle }>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

export default connect()(Button);