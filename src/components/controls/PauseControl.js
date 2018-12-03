import React from 'react';
import { connect } from 'react-redux';
import { toggleTimer } from '../../actions';
import ResponsiveIcon, { iconNames } from '../common/ResponsiveIcon';

const PauseButton = ({ isTimerActive, onPress }) => {
    let iconName = (isTimerActive) ? iconNames.PAUSE : iconNames.START;
    return (
        <ResponsiveIcon iconName={iconName} onPress={() => onPress()} />
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