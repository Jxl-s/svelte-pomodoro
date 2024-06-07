/** @type {HTMLAudioElement} */
let alarmAudio;

function getAlarmAudio() {
	if (!alarmAudio) alarmAudio = new Audio('/sounds/alarm.mp3');
	return alarmAudio;
}

export function playAlarm() {
	const audio = getAlarmAudio();
	audio.play();
}

export function stopAlarm() {
	const audio = getAlarmAudio();
	audio.pause();
	audio.currentTime = 0;
}
