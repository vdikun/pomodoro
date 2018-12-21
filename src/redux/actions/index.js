import Actions from './Actions';

export const startPomodoro = () => {
    return {
        type: Actions.START_POMODORO
    }
};

export const stopPomodoro = () => {
    return {
        type: Actions.STOP_POMODORO
    }
};

export const togglePomodoro = () => {
    return {
        type: Actions.TOGGLE_POMODORO
    }
};

export const tick = () => {
    return {
        type: Actions.TICK
    }
};

export const toggleTimer = () => {
    return {
        type: Actions.TOGGLE_TIMER
    }
};

export const toggleSettings = () => {
    return {
        type: Actions.TOGGLE_SETTINGS
    }
};

export const saveSettings = (settings) => {
    const { workMinutes, breakMinutes } = settings;
    return {
        type: Actions.SAVE_SETTINGS,
        payload: { workMinutes, breakMinutes }
    }
};