import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import styles from './../styles/common';

export default Button = ({ children, onPress }) => {
    const { buttonStyle, buttonTextStyle } = styles;
    return (
        <TouchableOpacity style={ buttonStyle } onPress={ onPress }>
            <Text style={ buttonTextStyle }>
                {children}
            </Text>
        </TouchableOpacity>
    );
};