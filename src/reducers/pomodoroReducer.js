import { Actions } from '../actions';

const initialState = {
    isPomodoro: false,
    secondsRemaining: -1
}

export default pomodoroReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.TOGGLE_POMODORO:
            const isPomodoro = !(state.isPomodoro);
            return {
                ...state,
                isPomodoro: isPomodoro,
                secondsRemaining: (isPomodoro)? 1500 : 300,
            };
        case Actions.TICK:
            const secondsRemaining = state.secondsRemaining;
            if (secondsRemaining <= 0) {
                return {
                    ...state
                };
            } else {
                return {
                    ...state,
                    isPomodoro: state.isPomodoro,
                    secondsRemaining: state.secondsRemaining - 1
                };
            }
        default:
            return state;
    }
}