<script>
	import Button from '../ui/button/button.svelte';
	import { SessionTypes, timerStore, setSessionType } from '$lib/stores/timer';

	const sessionType = timerStore.type;
</script>

<header class="grid grid-cols-3 gap-2">
	<Button
		size="sm"
		variant={$sessionType === SessionTypes.Focus ? 'default' : 'outline'}
		on:click={() => setSessionType(SessionTypes.Focus)}
	>
		Focus
	</Button>
	<Button
		size="sm"
		variant={$sessionType === SessionTypes.ShortBreak ? 'default' : 'outline'}
		on:click={() => setSessionType(SessionTypes.ShortBreak)}
	>
		Short Break
	</Button>
	<Button
		size="sm"
		variant={$sessionType === SessionTypes.LongBreak ? 'default' : 'outline'}
		on:click={() => setSessionType(SessionTypes.LongBreak)}
	>
		Long Break
	</Button>
</header>
