import { createStore } from 'redux';
import reducers from './../reducers';
import { togglePomodoro } from './../actions';
import Sounds from './../../utils/sound';
import pomodoroState from '../state';

const { ting, blop } = Sounds;

export default store = createStore(reducers);

const handleChange = () => {
  let currentValue = store.getState();
  let pomodoro = currentValue.pomodoro;
  if (pomodoro.secondsRemaining == 0) {
    // play sound
    let sound;
    if (pomodoro.pomodoroState == pomodoroState.WORK) {
      sound = ting;
    } else {
      sound = blop;
    }
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

export const unsubscribe = store.subscribe(handleChange);