import { Actions } from '../actions';
import { initialState } from './state';
import { toggleWorkOrBreak } from './common';

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