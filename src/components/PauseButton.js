import React from 'react';
import { connect } from 'react-redux';
import { toggleTimer } from './../actions';
import Button from './Button';

const PauseButton = ({ isTimerActive, onPress }) => {
    let buttonText = (isTimerActive) ? "Pause Timer" : "Start Timer";
    return (
        <Button text={buttonText} onPress={() => onPress()} />
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