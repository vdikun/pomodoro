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