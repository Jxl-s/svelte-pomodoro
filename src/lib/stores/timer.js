import { playAlarm } from '$lib/audio';
import { get, writable } from 'svelte/store';

// Defaults
const DEFAULT_FOCUS_TIME = 25 * 60;
const DEFAULT_SHORT_BREAK_TIME = 5 * 60;
const DEFAULT_LONG_BREAK_TIME = 15 * 60;
const DEFAULT_LONG_BREAK_INTERVAL = 4;

const DEFAULT_SOUND_ENABLED = true;
const DEFAULT_NOTIFICATION_ENABLED = true;

// Enums
export const SessionTypes = {
	Focus: 'Focus',
	ShortBreak: 'ShortBreak',
	LongBreak: 'LongBreak'
};

export const TimerStatus = {
	Running: 'Running',
	Paused: 'Paused',
	Stopped: 'Stopped'
};

const createTimerStore = () => {
	const type = writable(SessionTypes.Focus);
	const timeLeft = writable(DEFAULT_FOCUS_TIME);
	const timerStatus = writable(TimerStatus.Stopped);
	const pomodoroNumber = writable(1);

	return { type, timeLeft, timerStatus, pomodoroNumber };
};

const createSettingsStore = () => {
	const focusTime = writable(DEFAULT_FOCUS_TIME);
	const shortBreakTime = writable(DEFAULT_SHORT_BREAK_TIME);
	const longBreakTime = writable(DEFAULT_LONG_BREAK_TIME);
	const longBreakInterval = writable(DEFAULT_LONG_BREAK_INTERVAL);

	const soundEnabled = writable(DEFAULT_SOUND_ENABLED);
	const notificationEnabled = writable(DEFAULT_NOTIFICATION_ENABLED);

	return {
		focusTime,
		shortBreakTime,
		longBreakTime,
		longBreakInterval,
		soundEnabled,
		notificationEnabled
	};
};

/**
 * Format the time in seconds to a human readable format
 * @param {number} seconds
 * @returns
 */
export function formatTime(seconds) {
	const minutes = Math.floor(seconds / 60);
	const remainingSeconds = seconds % 60;

	return [minutes, remainingSeconds];
}

export const timerStore = createTimerStore();
export const settingsStore = createSettingsStore();

/**
 * Updates the current session type; will not do anything if it's the same one.
 * This function will also reset the timer.
 * @param {string} type
 */
export function setSessionType(type) {
	timerStore.type.set(type);

	const { focusTime, shortBreakTime, longBreakTime } = settingsStore;

	switch (type) {
		case SessionTypes.Focus:
			incrementPomodoro();
			timerStore.timeLeft.set(get(focusTime));
			break;
		case SessionTypes.ShortBreak:
			timerStore.timeLeft.set(get(shortBreakTime));
			break;
		case SessionTypes.LongBreak:
			timerStore.timeLeft.set(get(longBreakTime));
			break;
	}

	timerStore.timerStatus.set(TimerStatus.Stopped);
}

export function incrementPomodoro() {
	timerStore.pomodoroNumber.update((pomodoroNumber) => pomodoroNumber + 1);
}

// Function to be called repeatedly to decrement the time
export function decrementTime() {
	if (get(timerStore.timerStatus) !== TimerStatus.Running) return;
	if (get(timerStore.timeLeft) <= 0) {
		// Time is up, so update the session type as well
		let nextSession = SessionTypes.ShortBreak;
		switch (get(timerStore.type)) {
			case SessionTypes.Focus:
				if (get(timerStore.pomodoroNumber) % get(settingsStore.longBreakInterval) === 0) {
					nextSession = SessionTypes.LongBreak;
				}

				break;
			case SessionTypes.ShortBreak:
			case SessionTypes.LongBreak:
				nextSession = SessionTypes.Focus;
				break;
		}

		// Playing alarm
		if (get(settingsStore.soundEnabled)) {
			playAlarm();
		}

		setSessionType(nextSession);
		timerStore.timerStatus.set(TimerStatus.Stopped);
		return;
	}

	timerStore.timeLeft.update((timeLeft) => {
		if (timeLeft > 0) {
			return timeLeft - 1;
		}

		return 0;
	});
}
