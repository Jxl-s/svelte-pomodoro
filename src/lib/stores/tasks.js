import { writable } from 'svelte/store';

const createTasksStore = () => {
	const tasks = writable([]);
	return { tasks };
};

export const tasksStore = createTasksStore();
