import { Actions } from '../actions';

const pomodoroState = {
    DISABLED: 'DISABLED',
    WORK: 'WORK',
    BREAK: 'BREAK'
}

const initialState = {
    isPomodoro: false,
    pomodoroState: pomodoroState.DISABLED,
    secondsRemaining: -1,
    workSeconds: 25 * 60,
    breakSeconds: 5 * 60,
    activeTimer: false
}

export default pomodoroReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.TOGGLE_POMODORO:
            const isPomodoro = !(state.isPomodoro);
            return {
                ...state,
                isPomodoro: isPomodoro,
                secondsRemaining: (isPomodoro)? state.workSeconds : state.breakSeconds,
                activeTimer: true
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