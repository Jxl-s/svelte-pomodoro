<script>
	import { stopAlarm } from '$lib/audio';
	import FaForward from '$lib/icons/FaForward.svelte';
	import { TimerStatus, decrementTime, timerStore } from '$lib/stores/timer';
	import Button from '../ui/button/button.svelte';
	import ResetSessionModal from './ResetSessionModal.svelte';

	const timerStatus = timerStore.timerStatus;
	const handleStartTimer = () => {
		stopAlarm();
		timerStore.timerStatus.set(TimerStatus.Running);
	};

	const handlePauseTimer = () => {
		timerStore.timerStatus.set(TimerStatus.Paused);
	};

	const handleForward = () => {
		timerStore.timeLeft.set(0);
		decrementTime();
	};
</script>

<section class="grid">
	{#if $timerStatus === TimerStatus.Running}
		<div class="flex gap-2">
			<Button variant="secondary" on:click={handlePauseTimer} class="w-full">Pause</Button>
			<Button variant="ghost" on:click={handleForward}>
				<FaForward />
			</Button>
		</div>
	{:else}
		<Button on:click={handleStartTimer}>
			{$timerStatus === TimerStatus.Paused ? 'Resume' : 'Start'}
		</Button>
	{/if}
	<ResetSessionModal />
</section>
