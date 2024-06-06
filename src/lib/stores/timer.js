import { writable } from 'svelte/store';

export const TimerState = {
	None: 'None',
	Focus: 'Focus',
	ShortBreak: 'ShortBreak',
	LongBreak: 'LongBreak'
};

export const timerState = writable(TimerState.None);
export const timerValue = writable(0);
export const timerStarted = writable(false);
export const timerPaused = writable(false);

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

export function nextState() {
	timerState.update((state) => {
		switch (state) {
			case TimerState.None:
				return TimerState.Focus;
			case TimerState.Focus:
				return TimerState.ShortBreak;
			case TimerState.ShortBreak:
				return TimerState.Focus;
			case TimerState.LongBreak:
				return TimerState.Focus;
			default:
				return TimerState.None;
		}
	});
}
