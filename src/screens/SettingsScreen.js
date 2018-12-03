import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View
} from 'react-native';
import NumericInput from 'react-native-numeric-input';
import styles from './../styles/common';
import Button from './../components/Button'

class SettingsScreen extends Component {
	render() {
	  return (
	    <View style={styles.settingsContainer}>
          <Text>
              Hello world!
          </Text>
          <TextInput style={styles.textInput}>
              Hello world!
          </TextInput>
          <NumericInput type='up-down' value={10} />
          <Button text={"Save settings"} />
      </View>
	  );
	}
};

export default SettingsScreen;