const DEF_WORK_MINS = 25;
const DEF_BREAK_MINS = 5;

export default pomodoroState = {
    DISABLED: 'DISABLED',
    WORK: 'WORK',
    BREAK: 'BREAK'
}

export const initialState = {
    pomodoroState: pomodoroState.DISABLED,
    secondsRemaining: -1,
    workSeconds: DEF_WORK_MINS * 60,
    breakSeconds: DEF_BREAK_MINS * 60,
    activeTimer: false,
    showSettings: false
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