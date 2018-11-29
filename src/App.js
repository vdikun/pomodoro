/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { togglePomodoro } from './actions';

import Button from './components/Button';
import CountdownView from './components/CountdownView';
import PomodoroContainer from './components/PomodoroContainer';

import store from './store';

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