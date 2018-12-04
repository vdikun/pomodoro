import { combineReducers } from 'redux';

import pomodoroReducer from './pomodoroReducer';
import timerReducer from './timerReducer';

export default combineReducers({
    pomodoro: pomodoroReducer,
    timer: timerReducer
});