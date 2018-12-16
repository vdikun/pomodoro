import { AppState } from 'react-native';
import { togglePomodoro } from './actions';
import Sounds from './../utils/sound';
import pomodoroState from './state';

import NotificationService from '../notificationService';

const { ting, blop } = Sounds;

const { popNotif } = NotificationService;

export default handleChange = () => {
    let currentValue = store.getState();
    let pomodoro = currentValue.pomodoro;
    if (pomodoro.secondsRemaining == 0) {
      let sound, message;
      if (pomodoro.pomodoroState == pomodoroState.WORK) {
        sound = ting;
        message = "Break time!"
      } else {
        sound = blop;
        message = "Back to work!"
      }
      if (AppState.currentState.match(/inactive|background/)) {
        // show notification
        popNotif(message);
      }
      // play sound
      sound.play((success) => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
          // reset the player to its uninitialized state (android only)
          // this is the only option to recover after an error occured and use the player again
          sound.reset();
        }
      });
      store.dispatch(togglePomodoro());
    }
  };