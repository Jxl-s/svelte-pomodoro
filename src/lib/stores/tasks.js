import { playSound } from '$lib/audio';
import { saveTasks } from '$lib/storage';
import { writable } from 'svelte/store';

export const TaskStatus = {
	Active: 'Active',
	Completed: 'Completed'
};

const createTasksStore = () => {
	/** @type {import('svelte/store').Writable<{ content: string, status: string }[]>} */
	const tasks = writable([]);
	return { tasks };
};

export const tasksStore = createTasksStore();

/**
 * Adds a new task to the list
 * @param {string} content
 */
export const createTask = (content) => {
	playSound('click');
	tasksStore.tasks.update((tasks) => {
		tasks.push({ content, status: TaskStatus.Active });
		return tasks;
	});

	saveTasks();
};

/**
 * Deletes a task from the list
 * @param {number} index
 */
export const deleteTask = (index) => {
	tasksStore.tasks.update((tasks) => tasks.filter((_, i) => i !== index));
	saveTasks();
};

/**
 * Updates the status of a task
 * @param {*} index
 * @param {string} content
 * @param {*} status
 */
export const updateTaskStatus = (index, content, status) => {
	tasksStore.tasks.update((tasks) => {
		tasks[index] = { content, status };
		return tasks;
	});

	saveTasks();
};
