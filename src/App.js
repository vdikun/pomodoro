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
import PomodoroContainer from './components/PomodoroContainer';

const store = createStore(reducers);

console.log(store.getState());

const App = () => {
  return (
   <Provider store={store}>
    <PomodoroContainer isActive={true}>
      <Button onPress={() => store.dispatch(togglePomodoro())}>
        Pomodoro
      </Button>
    </PomodoroContainer>
  </Provider>
  );
};

//export default connect()(App);
export default App;