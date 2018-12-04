import Actions from '../actions/Actions'
import { initialState, toggleWorkOrBreak } from '../state';

export default pomodoroReducer = (state = initialState, action) => {
    switch (action.type) {
        /**
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
            */
        default:
            return state;
    }
}