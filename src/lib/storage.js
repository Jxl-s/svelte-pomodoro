import { get } from 'svelte/store';
import { settingsStore } from './stores/timer';
import { browser } from '$app/environment';

/**
 * Saves settings to local storage
 */
export function saveSettings() {
	if (!browser) return;

	const focusTime = get(settingsStore.focusTime);
	const shortBreakTime = get(settingsStore.shortBreakTime);
	const longBreakTime = get(settingsStore.longBreakTime);
	const longBreakInterval = get(settingsStore.longBreakInterval);
	const soundEnabled = get(settingsStore.soundEnabled);
	const notificationEnabled = get(settingsStore.notificationEnabled);

	const settingsData = {
		focusTime,
		shortBreakTime,
		longBreakTime,
		longBreakInterval,
		soundEnabled,
		notificationEnabled
	};

	localStorage.setItem('pomodoroSettings', JSON.stringify(settingsData));
}

/**
 * Loads settings from local storage
 */
export function loadSettings() {
	if (!browser) return;

	const settingsData = localStorage.getItem('pomodoroSettings');
	if (!settingsData) return;

	try {
		const {
			focusTime,
			shortBreakTime,
			longBreakTime,
			longBreakInterval,
			soundEnabled,
			notificationEnabled
		} = JSON.parse(settingsData);

		settingsStore.focusTime.set(focusTime);
		settingsStore.shortBreakTime.set(shortBreakTime);
		settingsStore.longBreakTime.set(longBreakTime);
		settingsStore.longBreakInterval.set(longBreakInterval);
		settingsStore.soundEnabled.set(soundEnabled);
		settingsStore.notificationEnabled.set(notificationEnabled);
	} catch (e) {
		localStorage.removeItem('pomodoroSettings');
	}
}
