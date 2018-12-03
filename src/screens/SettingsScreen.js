import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View
} from 'react-native';
import styles from './../styles/common';
import Button from './../components/Button'

class SettingsScreen extends Component {
	render() {
	  return (
	    <View style={styles.settingsContainer}>
          <Text>
              Hello world!
          </Text>
          <TextInput>
              Hello world!
          </TextInput>
          <Button text={"Save settings"} />
      </View>
	  );
	}
};

export default SettingsScreen;