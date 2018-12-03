const getMinutesRemaining = (seconds) => {
	return Math.floor(seconds / 60);
};

const getSecondsRemaining = (seconds) => {
	return seconds - (getMinutesRemaining(seconds) * 60);
};

const getTimerText = (secondsRemaining) => {
	if (secondsRemaining < 0) {
		return "";
	}
	let minutes = getMinutesRemaining(secondsRemaining).toString();
	if (minutes.length == 1) {
		minutes = "0" + minutes;
	}
	let seconds = getSecondsRemaining(secondsRemaining).toString();
	if (seconds.length == 1) {
		seconds = "0" + seconds;
	}
	return minutes + ":" + seconds;
};

export default Timer = {
  getTimerText
}