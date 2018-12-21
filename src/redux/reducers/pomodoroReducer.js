import Actions from './../actions/Actions';
import pomodoroState, { getInitialState, toggleWorkOrBreak } from '../state';

export default pomodoroReducer = (state = getInitialState(), action) => {
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
                secondsRemaining: state.workMinutes * 60,
                activeTimer: true
            };
        case Actions.STOP_POMODORO:
            return {
                ...getInitialState()
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
        case Actions.SAVE_SETTINGS:
            const { workMinutes, breakMinutes } = action.payload;
            return {
                ...getInitialState(workMinutes, breakMinutes)
            };
        default:
            return state;
    }
}