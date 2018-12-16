import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import ResponsiveIcon, { iconNames } from '../../common/ResponsiveIcon';
import { toggleSettings } from './../../../redux/actions';
import SettingsModal from './SettingsModal';
import pomodoroState from './../../../redux/state';

const SettingsControl = ({ onPress, showSettings }) => {
    if (showSettings) {
        return (
            <View style={styles.settingsIconContainer}>
                <View style={styles.settingsIconContainer}>
                    <ResponsiveIcon iconName={iconNames.SETTINGS} onPress={() => onPress()} /> 
                </View>             
                <SettingsModal/>
            </View>
        );
    } else {
        return null;
    }
};

const mapStateToProps = (state) => {
    return {
      showSettings: (state.pomodoro.pomodoroState == pomodoroState.DISABLED)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onPress: () => {
            dispatch(toggleSettings())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsControl);