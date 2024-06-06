import { writable } from 'svelte/store';

export const TimerState = {
	None: 'None',
	Focus: 'Focus',
	ShortBreak: 'ShortBreak',
	LongBreak: 'LongBreak'
};

export const timerState = writable(TimerState.Focus);
export const timerValue = writable(0);
export const timerStarted = writable(false);
