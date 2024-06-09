<script>
	import { browser } from '$app/environment';
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
	import FaGear from '$lib/icons/FaGear.svelte';
	import { settingsStore } from '$lib/stores/timer';
	import Input from '../ui/input/input.svelte';
	import Switch from '../ui/switch/switch.svelte';
	import InlineInput from './InlineInput.svelte';

	const {
		soundEnabled,
		notificationEnabled,
		focusTime,
		shortBreakTime,
		longBreakTime,
		longBreakInterval
	} = settingsStore;

	let focusTimeMin = Math.floor($focusTime / 60);
	$: {
		focusTime.set(focusTimeMin * 60);
	}

	let shortBreakTimeMin = Math.floor($shortBreakTime / 60);
	$: {
		shortBreakTime.set(shortBreakTimeMin * 60);
	}

	let longBreakTimeMin = Math.floor($longBreakTime / 60);
	$: {
		longBreakTime.set(longBreakTimeMin * 60);
	}

	$: {
		if ($notificationEnabled && browser) {
			Notification.requestPermission().then((result) => {
				if (result !== 'granted') {
					notificationEnabled.set(false);
					alert('You need to allow notifications to receive alerts');
				}
			});
		}
	}
</script>

<AlertDialog.Root>
	<AlertDialog.Trigger
		class="text-muted-foreground text-sm mt-2 hover:brightness-150 duration-100 flex gap-2 items-center"
	>
		Open Settings
		<FaGear class="w-4 h-4" />
	</AlertDialog.Trigger>
	<AlertDialog.Content>
		<AlertDialog.Header>
			<AlertDialog.Title>Pomodoro Settings</AlertDialog.Title>
			<AlertDialog.Description>
				Configurable settings for the pomodoro timer.
				<div class="grid gap-y-4 gap-x-8 items-center mt-4">
					<InlineInput
						title="Focus Time (minutes)"
						description="Duration of the focus timer"
						bind:value={focusTimeMin}
					/>
					<InlineInput
						title="Short Break Time (minutes)"
						description="Duration of the short breaks"
						bind:value={shortBreakTimeMin}
					/>
					<InlineInput
						title="Long Break Time (minutes)"
						description="Duration of the long breaks"
						bind:value={longBreakTimeMin}
					/>
					<InlineInput
						title="Long Break Interval"
						description="How many focus sessions before a long break"
						bind:value={$longBreakInterval}
					/>
					<hr />
					<div class="w-full flex gap-4 items-center justify-between">
						<div>
							<p class="text-sm mb-1 font-semibold text-white">Sound Enabled</p>
							<p class="text-sm text-muted-foreground">
								Enable the playing of sounds when the timer stops.
							</p>
						</div>
						<Switch bind:checked={$soundEnabled} />
					</div>
					<div class="w-full flex gap-4 items-center justify-between">
						<div>
							<p class="text-sm mb-1 font-semibold text-white">Notification Enabled</p>
							<p class="text-sm text-muted-foreground">
								A notification will be sent when the timer stops.
							</p>
						</div>
						<Switch bind:checked={$notificationEnabled} />
					</div>
				</div>
			</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Cancel>Close</AlertDialog.Cancel>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>
