import { Actions } from '../actions';
import pomodoroState from './state';

const initialState = {
    isPomodoro: false,
    pomodoroState: pomodoroState.DISABLED,
    secondsRemaining: -1,
    workSeconds: 25 * 60,
    breakSeconds: 5 * 60,
    activeTimer: false
}

const toggleWorkOrBreak = (state) => {
    if (state.pomodoroState == pomodoroState.WORK) {
        return {
            pomodoroState: pomodoroState.BREAK,
            secondsRemaining: state.breakSeconds
        }
    } else {
        return {
            pomodoroState: pomodoroState.WORK,
            secondsRemaining: state.workSeconds
        }  
    }
}

export default pomodoroReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.TOGGLE_POMODORO:
            return {
                ...state,
                ...toggleWorkOrBreak(state),
                activeTimer: true
            };
        case Actions.START_POMODORO:
            return {
                ...state,
                pomodoroState: pomodoroState.WORK,
                secondsRemaining: state.workSeconds,
                activeTimer: true
            };
        case Actions.TICK:
            const secondsRemaining = state.secondsRemaining;
            if (secondsRemaining <= 0) {
                return {
                    ...state,
                    ...toggleWorkOrBreak(state)
                };
            } else {
                return {
                    ...state,
                    secondsRemaining: secondsRemaining - 1
                };
            }
        default:
            return state;
    }
}