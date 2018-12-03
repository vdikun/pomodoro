import { Actions } from '../actions';
import pomodoroState, { initialState } from './state';
import { toggleWorkOrBreak } from './common';

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
        case Actions.STOP_POMODORO:
            return {
                ...initialState
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
            };
        case Actions.TOGGLE_TIMER:
            return {
                ...state,
                activeTimer: !state.activeTimer
            };
        default:
            return state;
    }
}