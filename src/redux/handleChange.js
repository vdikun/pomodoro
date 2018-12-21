import { AppState } from 'react-native';
import { togglePomodoro } from './actions';
import { playSound } from './../utils/sound';
import pomodoroState from './state';

import NotificationService from '../notificationService';

const { popNotif } = NotificationService;

export default handleChange = () => {
    let currentValue = store.getState();
    const { pomodoro, tones } = currentValue;
    if (pomodoro.secondsRemaining == 0) {
      let soundID, message;
      if (pomodoro.pomodoroState == pomodoroState.WORK) {
        soundID = tones.breakTone;
        message = "Break time!"
      } else {
        soundID = tones.workTone;
        message = "Back to work!"
      }
      if (AppState.currentState.match(/inactive|background/)) {
        // show notification
        popNotif(message);
      }
      // play sound
      playSound(soundID);
      store.dispatch(togglePomodoro());
    }
  };