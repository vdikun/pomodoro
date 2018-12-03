import React from 'react';
import {
  Image,
  TouchableOpacity
} from 'react-native';
import styles from './styles';

const settingsIcon = './../../../../img/settings-18dp.png';

const SettingsButton = ({ onPress }) => {
    return (
        <TouchableOpacity
        style={ styles.settingsButton }
        onPress={ () => { onPress() } }>
            <Image 
              style={ styles.settingsButton }
              source={require(settingsIcon)} />
        </TouchableOpacity>
    );
};

export default SettingsButton;