<script>
	import { timerState, timerPaused, timerStarted, timerValue, formatTime } from '$lib/stores';
	import { onDestroy } from 'svelte';

	// when timerStarted is set to true, the timer will start
	const timer = setInterval(() => {
		if (!timerStarted) return;
		if (timerPaused) return;

		timerValue.update((value) => {
			if (value === 0) {
				timerStarted.set(false);
				return 0;
			}
			return value - 1;
		});
	}, 1000);

	// clear the interval when the component is destroyed
	onDestroy(() => {
		clearInterval(timer);
	});
</script>

<main>Welcome to useless pomodoro website</main>
<p>{formatTime($timerValue)}</p>
<p>Current session: {$timerState}</p>

<button on:click={() => timerStarted.set(true)}>Start</button>
