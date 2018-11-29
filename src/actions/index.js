export const Actions = {
    TOGGLE_POMODORO: 'TOGGLE_POMODORO'
}

export const togglePomodoro = (toggle) => {
    return {
        type: Actions.TOGGLE_POMODORO,
        payload: toggle
    }
}