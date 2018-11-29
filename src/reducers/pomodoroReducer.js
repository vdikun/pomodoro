import Actions from '../actions';

export default (state = {}, action) => {
    switch (action.type) {
        case Actions.TOGGLE_POMODORO:
            const toggle = action.payload;
            return {
                ...state,
                isPomodoro: !toggle,
                secondsRemaining: (toggle)? 300 : 1500,
            };
        default:
            return state;
    }
}