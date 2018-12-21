import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';
import IntervalInput from './IntervalInput';
import Button from './../../../common/Button';
import { toggleSettings, saveSettings } from './../../../../redux/actions';
import styles from './styles';

class SettingsModal extends Component {

    constructor(props) {
        super(props);
        const { breakMinutes, workMinutes } = this.props;
        this.state = { breakMinutes, workMinutes };
    }

    render () {
        const { visible, onClose, onSave } = this.props;
        return (
            <TouchableWithoutFeedback onPress={() => onClose()}>
                <Modal
                style={{margin: 0}}
                animationType="slide"
                transparent={true}
                isVisible={visible}
                onRequestClose={() => onClose()}>
                    <View style={styles.modalContent}>
                        <View style={styles.view} >
                            <Text style={styles.header}>Settings</Text>
                            <View style={styles.setting}>
                                <IntervalInput
                                    title={"Work time interval"} 
                                    initValue={this.state.workMinutes}
                                    onChange={value => this.setState({workMinutes: value})} />
                            </View>
                            <View style={styles.setting}>
                                <IntervalInput
                                    title={"Break time interval"} 
                                    initValue={this.state.breakMinutes}
                                    onChange={value => this.setState({breakMinutes: value})} />
                            </View>
                            <View style={styles.setting}>
                                <Text>Tone played when break starts</Text>
                            </View>
                            <View style={styles.setting}>
                                <Text>Tone played when break ends</Text>
                            </View>
                            <Button text="Save" onPress={() => {
                                onClose();
                                onSave({
                                    workMinutes: this.state.workMinutes,
                                    breakMinutes: this.state.breakMinutes
                                });
                                }} />
                        </View>
                    </View>
                </Modal>
            </TouchableWithoutFeedback>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        visible: state.settingsOpen,
        workMinutes: state.pomodoro.workSeconds / 60,
        breakMinutes: state.pomodoro.breakSeconds / 60
    }
  };

  const mapDispatchToProps = (dispatch) => {
    return {
        onClose: () => {
            dispatch(toggleSettings())
        },
        onSave: (settings) => {
            dispatch(saveSettings(settings))
        }
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(SettingsModal);