<script>
	import { decrementTime, formatTime, timerStore } from '$lib/stores/timer';
	import { onMount } from 'svelte';

	const timeLeft = timerStore.timeLeft;
	onMount(() => {
		const interval = setInterval(decrementTime, 1000);
		return () => clearInterval(interval);
	});
</script>

<section class="my-4 text-center">
	<p class="text-4xl font-mono border p-2 rounded-md">{formatTime($timeLeft)}</p>
</section>
