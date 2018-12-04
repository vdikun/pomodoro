import { createStore } from 'redux';
import reducers from './../reducers';
import { togglePomodoro } from './../actions';

export default store = createStore(reducers);

const handleChange = () => {
  let currentValue = store.getState();
  if (currentValue.secondsRemaining == 0) {
    // play sound
    // send notification
    // run action
    store.dispatch(togglePomodoro());
  }
};

export const unsubscribe = store.subscribe(handleChange);