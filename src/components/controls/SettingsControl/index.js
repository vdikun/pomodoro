import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import ResponsiveIcon, { iconNames } from '../../common/ResponsiveIcon';
import { toggleSettings } from './../../../redux/actions';
import SettingsModal from './../../SettingsModal';

const SettingsControl = ({ onPress }) => {
    return (
        <View style={styles.settingsIconContainer}>
            <View style={styles.settingsIconContainer}>
                <ResponsiveIcon iconName={iconNames.SETTINGS} onPress={() => onPress()} /> 
            </View>             
            <SettingsModal/>
        </View>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        onPress: () => {
            dispatch(toggleSettings())
        }
    }
};

export default connect(null, mapDispatchToProps)(SettingsControl);