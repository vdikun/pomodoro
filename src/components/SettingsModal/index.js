import React from 'react';
import { Alert, Modal, Text, TouchableOpacity, View } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import { connect } from 'react-redux';
import Button from './../common/Button';
import { toggleSettings } from './../../redux/actions';
import styles from './styles';

const style = {
    padding: 30,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderRadius: 10
}

const modalContent = {
    margin: 0,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
};

const SettingsModal = ({ visible, onClose }) => {

    return (
        <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
            Alert.alert('Modal has been closed.');
        }}>
            <View style={modalContent}>
                <View style={style} >
                    <Text>Welcome to... the settings modal</Text>
                    <Text>Work time interval</Text>
                    <NumericInput />
                    <Text>Break time interval</Text>
                    <NumericInput />
                    <Text>Tone played when break starts</Text>
                    <Text>Tone played when break ends</Text>
                    <Button text="Close Modal" onPress={() => onClose()} />
                </View>
            </View>
        </Modal>
    );
};

const mapStateToProps = (state) => {
    return {
        visible: false
    }
  };

  const mapDispatchToProps = (state) => {
    return {
        onClose: () => {
            dispatch(toggleSettings())
        }
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(SettingsModal);