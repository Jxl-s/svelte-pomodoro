<script>
	import { TimerStatus, formatTime, timerStore } from '$lib/stores/timer';
	import Button from '../ui/button/button.svelte';
	import * as Card from '../ui/card';
	import SessionSelect from './SessionSelect.svelte';
	import TimeControls from './TimeControls.svelte';
	import TimeDisplay from './TimeDisplay.svelte';

	/** @type {string | undefined} */
	let className = undefined;
	export { className as class };

	const timeLeft = timerStore.timeLeft;
	const timerStatus = timerStore.timerStatus;
</script>

<Card.Root class={className}>
	<Card.Header>
		<Card.Title>Focus Timer</Card.Title>
		<Card.Description>A minimalistic timer for your work sessions.</Card.Description>
	</Card.Header>
	<Card.Content>
		<SessionSelect />
		<TimeDisplay />
		<TimeControls />
	</Card.Content>
</Card.Root>
