import React, { Component } from 'react';
import { Text } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux';
import { tick } from './../../redux/actions';
import Timer from './../../utils/timer';
import BackgroundTimer from 'react-native-background-timer';
import styles from './styles';

class TimerView extends Component {

	startTimer() {
		if (!this._interval) {
			BackgroundTimer.runBackgroundTimer(() => { 
				this.props.tock()
			}, 1000);
			this._interval = true;
		}
	}

	stopTimer() {
		if (this._interval) {
			BackgroundTimer.stopBackgroundTimer();
			this._interval = null;
		}
	}

	renderActiveTimer(secondsRemaining) {
		const { timerStyle } = styles;
		return (
			<Text style={ timerStyle }>
				{ Timer.getTimerText(secondsRemaining) }
			</Text>
		);
	}

	renderPausedTimer(secondsRemaining) {
		const { timerStyle } = styles;
		return (
			<Animatable.Text animation="fadeIn" iterationCount={"infinite"} direction="alternate" duration={500} style={ timerStyle }>
				{ Timer.getTimerText(secondsRemaining) }
			</Animatable.Text>
		);
	}

	render() {
		const { activeTimer, secondsRemaining } = this.props;
		if (activeTimer) {
			this.startTimer();
    		return this.renderActiveTimer(secondsRemaining);
		} else {
			this.stopTimer();
			if (secondsRemaining > -1) {
				return this.renderPausedTimer(secondsRemaining);	
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

export default connect(mapStateToProps, mapDispatchToProps)(TimerView);