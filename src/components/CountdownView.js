import React, { Component } from 'react';
import {
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { tick } from './../actions';
import Timer from './Timer';
import styles from './../styles/components/Timer.style';

class CountdownView extends Component {

	startTimer() {
		if (!this._interval) {
			this._interval = setInterval(() => {
				this.props.tock()
			}, 1000);
		}
	}

	stopTimer() {
		if (this._interval) {
			clearInterval(this._interval);
			this._interval = null;
		}
	}

	render() {
		const { activeTimer, secondsRemaining } = this.props;
		if (activeTimer) {
			this.startTimer();
    	const { timerStyle } = styles;
    	return (
	    	<Text style={ timerStyle }>
	        	{ Timer.showTimerText(secondsRemaining) }
	        </Text>
    	);
		} else {
			this.stopTimer();
			return null;
		}
	}
};

const mapStateToProps = (state) => {
  return {
		secondsRemaining: state.pomodoro.secondsRemaining,
		activeTimer: state.pomodoro.activeTimer
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