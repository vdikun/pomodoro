import { combineReducers } from 'redux';

import { Actions } from '../actions';

const initialState = {
    isPomodoro: false,
    secondsRemaining: 0
}

const pomodoroReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.TOGGLE_POMODORO:
            const isPomodoro = !(state.isPomodoro);
            return {
                ...state,
                isPomodoro: isPomodoro,
                secondsRemaining: (isPomodoro)? 1500 : 300,
            };
        default:
            return state;
    }
}

export default combineReducers({
    pomodoro: pomodoroReducer
});