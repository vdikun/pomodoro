import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles, { Black } from './../styles/components/ControlIcon.style';

style = {
    opacity: 0.7,
    margin: 5
}

const ControlIcon = ({ iconName, onPress }) => {
    return (
        <TouchableOpacity onPress={() => onPress()} style={styles.view}>
            <Icon name={iconName} size={40} color={Black} />
        </TouchableOpacity>
    );
};

export default ControlIcon;