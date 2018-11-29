import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import { togglePomodoro } from './../actions';
import ToggleButton from './../components/ToggleButton';
import CountdownView from './../components/CountdownView';
import PomodoroContainer from './../components/PomodoroContainer';

class HomeScreen extends Component {
	render() {
	  return (
	    <PomodoroContainer>
	      <CountdownView />
	      <ToggleButton />
	    </PomodoroContainer>
	  );
	}
};

export default HomeScreen;