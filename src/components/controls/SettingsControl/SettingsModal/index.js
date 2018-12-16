import React, { Component } from 'react';
import { Modal, Text, View } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import { connect } from 'react-redux';
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
            <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={() => onClose()}>
                <View style={styles.modalContent}>
                    <View style={styles.view} >
                        <Text style={styles.header}>Settings</Text>
                        <View style={styles.setting}>
                            <Text>Work time interval</Text>
                            <NumericInput
                                minValue={1}
                                maxValue={59}
                                initValue={this.state.workMinutes} 
                                onChange={value => this.setState({workMinutes: value})}/>
                        </View>
                        <View style={styles.setting}>
                            <Text>Break time interval</Text>
                            <NumericInput
                                minValue={1}
                                maxValue={59}
                                initValue={this.state.breakMinutes} 
                                onChange={value => this.setState({breakMinutes: value})}/>
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