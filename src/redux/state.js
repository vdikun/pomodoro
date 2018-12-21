let DEF_WORK_MINS = 25;
let DEF_BREAK_MINS = 5;

export default pomodoroState = {
    DISABLED: 'DISABLED',
    WORK: 'WORK',
    BREAK: 'BREAK'
}

export const getInitialState = (workMinutes = DEF_WORK_MINS, breakMinutes = DEF_BREAK_MINS) => {
    DEF_WORK_MINS = workMinutes;
    DEF_BREAK_MINS = breakMinutes;
    return {
        pomodoroState: pomodoroState.DISABLED,
        secondsRemaining: -1,
        workSeconds: workMinutes * 60,
        breakSeconds: breakMinutes * 60,
        activeTimer: false,
        showSettings: false
    }
}

export const toggleWorkOrBreak = (state) => {
    if (state.pomodoroState == pomodoroState.WORK) {
        return {
            pomodoroState: pomodoroState.BREAK,
            secondsRemaining: state.breakSeconds
        }
    } else {
        return {
            pomodoroState: pomodoroState.WORK,
            secondsRemaining: state.workSeconds
        }  
    }
}