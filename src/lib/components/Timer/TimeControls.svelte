<script>
	import FaForward from '$lib/icons/FaForward.svelte';
	import { TimerStatus, pauseTimer, startTimer, timerStore } from '$lib/stores/timer';
	import Button from '../ui/button/button.svelte';

	const timerStatus = timerStore.timerStatus;
	const pomodoroNumber = timerStore.pomodoroNumber;
</script>

<section class="grid">
	{#if $timerStatus === TimerStatus.Running}
		<div class="flex gap-2">
			<Button variant="secondary" on:click={() => pauseTimer()} class="w-full">Pause</Button>
			<Button variant="ghost">
				<FaForward />
			</Button>
		</div>
	{:else}
		<Button on:click={() => startTimer()}>
			{$timerStatus === TimerStatus.Paused ? 'Resume' : 'Start'}
		</Button>
	{/if}
	<p class="text-muted-foreground text-sm mt-2">
		Pomodoro Session
		<span class="font-bold text-foreground">#{$pomodoroNumber}</span>
	</p>
</section>
