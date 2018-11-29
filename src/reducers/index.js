import { combineReducers } from 'redux';

import { Actions } from '../actions';
import pomodoroReducer from './pomodoroReducer';

export default combineReducers({
    pomodoro: pomodoroReducer
});