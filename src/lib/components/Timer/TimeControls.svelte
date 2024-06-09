<script>
	import FaForward from '$lib/icons/FaForward.svelte';
	import { TimerStatus, forwardTimer, pauseTimer, startTimer, timerStore } from '$lib/stores/timer';
	import Button from '../ui/button/button.svelte';
	import ResetSessionModal from './ResetSessionModal.svelte';
	import SettingsModal from '../Settings/SettingsModal.svelte';

	const timerStatus = timerStore.timerStatus;
</script>

<section class="grid">
	{#if $timerStatus === TimerStatus.Running}
		<div class="flex gap-2">
			<Button variant="secondary" on:click={pauseTimer} class="w-full">Pause</Button>
			<Button variant="ghost" on:click={forwardTimer}>
				<FaForward />
			</Button>
		</div>
	{:else}
		<Button on:click={startTimer}>
			{$timerStatus === TimerStatus.Paused ? 'Resume' : 'Start'}
		</Button>
	{/if}
	<div class="flex justify-between">
		<ResetSessionModal />
		<SettingsModal />
	</div>
</section>
