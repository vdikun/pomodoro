import React from 'react';
import {
  View,
} from 'react-native';
import styles from './../styles/common';

export default PomodoroContainer = ({ children, isActive }) => {
    const { redContainer, greenContainer } = styles;
    var containerStyle = (isActive) ? redContainer : greenContainer;
    return (
        <View style={ containerStyle }>
            {children}
        </View>
    );
};