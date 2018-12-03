import React, { Component } from 'react';
import {
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { tick } from './../../actions';
import Timer from './../../utils/timer';
import styles from './styles';

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
    	const { timerStyle } = styles;
		if (activeTimer) {
			this.startTimer();
    	return (
	    	<Text style={ timerStyle }>
	        	{ Timer.getTimerText(secondsRemaining) }
	        </Text>
    	);
		} else {
			this.stopTimer();
			if (secondsRemaining > -1) {
				return (
					<Text style={ timerStyle }>
						{ Timer.getTimerText(secondsRemaining) }
					</Text>
				);	
			}
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