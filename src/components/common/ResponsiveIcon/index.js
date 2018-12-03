import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles, { Black } from './styles';

export const iconNames = {
    START: "play-circle",
    STOP: "stop-circle",
    PAUSE: "pause-circle",
    TOGGLE: "chevron-circle-right"    
}

const ControlIcon = ({ iconName, onPress }) => {
    return (
        <TouchableOpacity onPress={() => onPress()} style={styles.view}>
            <Icon name={iconName} size={40} color={Black} />
        </TouchableOpacity>
    );
};

export default ControlIcon;