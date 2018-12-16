import { combineReducers } from 'redux';

import pomodoroReducer from './pomodoroReducer';
import settingsReducer from './settingsReducer';

export default combineReducers({
    pomodoro: pomodoroReducer,
    settingsOpen: settingsReducer
});