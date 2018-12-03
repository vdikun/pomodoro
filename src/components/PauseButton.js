import React from 'react';
import { connect } from 'react-redux';
import { toggleTimer } from './../actions';
import ControlIcon from './ControlIcon';

const PauseButton = ({ isTimerActive, onPress }) => {
    //let buttonText = (isTimerActive) ? "Pause Timer" : "Start Timer";
    let iconName = (isTimerActive) ? "pause-circle" : "play-circle";
    return (
        <ControlIcon iconName={iconName} onPress={() => onPress()} />
    );
};

const mapStateToProps = (state) => {
    return {
      isTimerActive: state.pomodoro.activeTimer,
    }
  };
  
  const mapDispatchToProps = (dispatch) => {
      return { 
          onPress: () => {
              dispatch(toggleTimer());
          }
      }
  };

export default connect(mapStateToProps, mapDispatchToProps)(PauseButton);