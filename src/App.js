/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { connect } from 'react-redux';
import { togglePomodoro } from './actions';

import Button from './components/Button';
import CountdownView from './components/CountdownView';
import PomodoroContainer from './components/PomodoroContainer';

const store = createStore(reducers);

const select = (state) => {
  return state.pomodoro;
};

let currentValue = null;

const handleChange = () => {
  let currentValue = select(store.getState());
  if (currentValue.secondsRemaining == 0) {
    // play sound
    // send notification
    // run action
    store.dispatch(togglePomodoro());
  }
};

const unsubscribe = store.subscribe(handleChange);

const App = () => {
  return (
   <Provider store={store}>
    <PomodoroContainer>
      <CountdownView store={store} />
      <Button onPress={() => store.dispatch(togglePomodoro())} />
    </PomodoroContainer>
  </Provider>
  );
};

export default App;