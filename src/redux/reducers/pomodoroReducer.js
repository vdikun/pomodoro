import Actions from './../actions/Actions';
import pomodoroState, { initialState, toggleWorkOrBreak } from '../state';

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
        case Actions.TOGGLE_TIMER:
            return {
                ...state,
                activeTimer: !state.activeTimer
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
        default:
            return state;
    }
}