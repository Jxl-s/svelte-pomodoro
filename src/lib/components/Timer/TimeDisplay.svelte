<script>
	import { decrementTime, formatTime, timerStore } from '$lib/stores/timer';
	import { onMount } from 'svelte';

	const timeLeft = timerStore.timeLeft;

	onMount(() => {
		/** @type {number} */
		let intervalId;
		let start = performance.now();

		const length = 1000; // length of time between intervals in milliseconds

		/**
		 * Step function for requestAnimationFrame
		 * @param timestamp {number}
		 */
		function step(timestamp) {
			if (timestamp - start >= length) {
				decrementTime();
				start = timestamp;
			}

			intervalId = requestAnimationFrame(step);
		}

		intervalId = requestAnimationFrame(step);
		return () => cancelAnimationFrame(intervalId);
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
