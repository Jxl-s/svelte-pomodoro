<script>
	import { decrementTime, formatTime, timerStore } from '$lib/stores/timer';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';

	const timeLeft = timerStore.timeLeft;

	onMount(() => {
		/** @type {number} */
		let start;
		/** @type {number} */
		let nextAt;

		let stop = false;
		const step = () => {
			if (stop) return;

			if (!start) {
				start = new Date().getTime();
				nextAt = start;
			}
			nextAt += 1000;

			decrementTime();
			setTimeout(step, nextAt - new Date().getTime());
		};

		step();
		return () => (stop = true);
	});

	/**
	 * Shorthand for padding number
	 * @param n {number}
	 */
	const padNum = (n) => n.toString().padStart(2, '0');

	$: [timeMin, timeSec] = formatTime($timeLeft);
	$: timeString = padNum(timeMin) + ':' + padNum(timeSec);
</script>

<section class="my-4 text-center">
	<p class="text-4xl font-mono border p-2 rounded-md">{timeString}</p>
</section>
