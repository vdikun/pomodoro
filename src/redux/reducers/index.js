import { combineReducers } from 'redux';

import pomodoroReducer from './pomodoroReducer';

export default combineReducers({
    pomodoro: pomodoroReducer
});