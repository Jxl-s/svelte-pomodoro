import { get } from 'svelte/store';
import { settingsStore } from './stores/timer';
import { browser } from '$app/environment';
import { tasksStore } from './stores/tasks';

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

/**
 * Saves tasks to local storage
 * @returns {void}
 */
export function saveTasks() {
	if (!browser) return;

	const tasksArray = get(tasksStore.tasks);
	localStorage.setItem('pomodoroTasks', JSON.stringify(tasksArray));
}

/**
 * Loads tasks from local storage
 * @returns {void}
 */
export function loadTasks() {
	if (!browser) return;

	const tasksData = localStorage.getItem('pomodoroTasks');
	if (!tasksData) return;

	try {
		const tasksArray = JSON.parse(tasksData);
		tasksStore.tasks.set(tasksArray);
	} catch (e) {
		localStorage.removeItem('pomodoroTasks');
	}
}
