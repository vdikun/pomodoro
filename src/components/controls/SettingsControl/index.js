import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import ResponsiveIcon, { iconNames } from '../../common/ResponsiveIcon';
import { toggleSettings } from './../../../redux/actions';
import SettingsModal from './../../SettingsModal';

const SettingsControl = ({ onOpen, onClose }) => {
    return (
        <View style={styles.settingsIconContainer}>
            <View style={styles.settingsIconContainer}>
                <ResponsiveIcon iconName={iconNames.SETTINGS} onPress={() => onOpen()} /> 
            </View>             
            <SettingsModal/>
        </View>

    );
};

const mapStateToProps = (state) => {
    return {
        isPomodoro: !(state.pomodoro.pomodoroState == pomodoroState.BREAK)
    }
  };

  const mapDispatchToProps = (dispatch) => {
    return {
        onOpen: () => {
            dispatch(toggleSettings())
        },
        onClose: () => {
            dispatch(toggleSettings())
        }
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(SettingsControl);