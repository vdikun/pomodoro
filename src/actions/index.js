export const Actions = {
    TOGGLE_POMODORO: 'TOGGLE_POMODORO',
    TICK: 'TICK'
}

export const togglePomodoro = () => {
    return {
        type: Actions.TOGGLE_POMODORO
    }
}

export const tick = () => {
    return {
        type: Actions.TICK
    }
}