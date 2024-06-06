import { writable } from 'svelte/store';

// Defaults
const DEFAULT_FOCUS_TIME = 25 * 60 * 1000;
const DEFAULT_SHORT_BREAK_TIME = 5 * 60 * 1000;
const DEFAULT_LONG_BREAK_TIME = 15 * 60 * 1000;

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

export const createTimerStore = () => {
	const settings = writable({
		// Durations
		focusTime: DEFAULT_FOCUS_TIME,
		shortBreak: DEFAULT_SHORT_BREAK_TIME,
		longBreak: DEFAULT_LONG_BREAK_TIME,

		// Other
		soundEnabled: DEFAULT_SOUND_ENABLED,
		notificationEnabled: DEFAULT_NOTIFICATION_ENABLED
	});

	const session = writable({
		type: SessionTypes.Focus,
		timeLeft: DEFAULT_FOCUS_TIME,
		timerStatus: TimerStatus.Stopped,
		completedCount: 0
	});

	return { settings, session };
};

/**
 * Format the time in seconds to a human readable format
 * @param {number} seconds
 * @returns
 */
export function formatTime(seconds) {
	const minutes = Math.floor(seconds / 60);
	const remainingSeconds = seconds % 60;

	const paddedMinutes = minutes.toString().padStart(2, '0');
	const paddedSeconds = remainingSeconds.toString().padStart(2, '0');
	return `${paddedMinutes}:${paddedSeconds}`;
}
