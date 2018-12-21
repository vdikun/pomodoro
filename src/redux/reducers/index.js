import { combineReducers } from 'redux';

import pomodoroReducer from './pomodoroReducer';
import settingsReducer from './settingsReducer';
import toneReducer from './toneReducer';

export default combineReducers({
    pomodoro: pomodoroReducer,
    settingsOpen: settingsReducer,
    tones: toneReducer
});