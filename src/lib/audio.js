const audioData = {
	alarm: { url: '/sounds/alarm.mp3', volume: 1 },
	click: { url: '/sounds/click.mp3', volume: 0.5 }
};

/** @type {Record<string, HTMLAudioElement>} */
const audioElements = {};

/**
 *
 * @param {keyof typeof audioData} name
 * @returns
 */
function getAudio(name) {
	if (!audioElements[name]) {
		audioElements[name] = new Audio(audioData[name].url);
		audioElements[name].volume = audioData[name].volume;
	}

	return audioElements[name];
}

/**
 *
 * @param {keyof typeof audioData} name
 */
export function playSound(name) {
	const audio = getAudio(name);
	audio.currentTime = 0;
	audio.play();
}

/**
 *
 * @param {keyof typeof audioData} name
 */
export function stopSound(name) {
	const audio = getAudio(name);
	audio.pause();
	audio.currentTime = 0;
}
