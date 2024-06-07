<script>
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
	import { resetPomodoro, timerStore } from '$lib/stores/timer';

	const pomodoroNumber = timerStore.pomodoroNumber;
</script>

<AlertDialog.Root>
	<p class="text-muted-foreground text-sm mt-2">
		Pomodoro Session
		<AlertDialog.Trigger class="font-bold text-foreground">#{$pomodoroNumber}</AlertDialog.Trigger>
	</p>
	<AlertDialog.Content>
		<AlertDialog.Header>
			<AlertDialog.Title>Reset Pomodoro Number</AlertDialog.Title>
			<AlertDialog.Description>
				This action cannot be undone. This will reset the pomodoro number, and the long breaks will
				be reset as well.
			</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
			<AlertDialog.Action on:click={resetPomodoro}>Continue</AlertDialog.Action>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>
