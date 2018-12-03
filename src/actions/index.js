export const Actions = {
    TOGGLE_POMODORO: 'TOGGLE_POMODORO',
    TICK: 'TICK',
    START_POMODORO: 'START_POMODORO'
}

export const startPomodoro = () => {
    return {
        type: Actions.START_POMODORO
    }
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