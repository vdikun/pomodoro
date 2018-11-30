import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { tick } from './../actions';
import Timer from './Timer';
import styles from './../styles/common';

class CountdownView extends Component {

	componentDidMount() {
	  this._interval = setInterval(() => {
	    this.props.tock()
	  }, 1000);
	}

	componentWillUnmount() {
	  clearInterval(this._interval);
	}

	render() {
		const { secondsRemaining } = this.props;
    	const { timerStyle } = styles;
    	return (
	    	<Text style={ timerStyle }>
	        	{ Timer.showTimerText(secondsRemaining) }
	        </Text>
    	);
	}
};

const mapStateToProps = (state) => {
  return {
    secondsRemaining: state.pomodoro.secondsRemaining
  }
};

const mapDispatchToProps = (dispatch) => {
	return { 
			tock: () => {
					dispatch(tick());
			}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CountdownView);