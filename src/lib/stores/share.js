import { writable } from 'svelte/store';

const createShareStore = () => {
	const isMultiplayer = writable(false);
	const isHost = writable(false);
	return { isMultiplayer, isHost };
};

export const shareStore = createShareStore();
