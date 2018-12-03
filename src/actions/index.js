export const Actions = {
    TOGGLE_POMODORO: 'TOGGLE_POMODORO',
    TICK: 'TICK',
    START_POMODORO: 'START_POMODORO',
    STOP_POMODORO: 'STOP_POMODORO',
    TOGGLE_TIMER: 'TOGGLE_TIMER'
}

export const startPomodoro = () => {
    return {
        type: Actions.START_POMODORO
    }
}

export const stopPomodoro = () => {
    return {
        type: Actions.STOP_POMODORO
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

export const toggleTimer = () => {
    return {
        type: Actions.TOGGLE_TIMER
    }
}