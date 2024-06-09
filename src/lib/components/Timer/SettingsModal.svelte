<script>
	import * as AlertDialog from '$lib/components/ui/alert-dialog';
	import * as Select from '$lib/components/ui/select';
	import FaGear from '$lib/icons/FaGear.svelte';
	import { settingsStore } from '$lib/stores/timer';
	import Input from '../ui/input/input.svelte';
	import Switch from '../ui/switch/switch.svelte';

	const { soundEnabled, notificationEnabled } = settingsStore;
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
					<div class="w-full flex gap-4 items-center justify-between">
						<div>
							<p class="text-sm mb-1 font-semibold text-white">Focus Time</p>
							<p class="text-sm text-muted-foreground">Duration of the focus timer</p>
						</div>
						<div class="flex items-center gap-2">
							<Input class="w-20 text-center" type="text" min={0} max={60} />
							:
							<Input class="w-20 text-center" type="text" min={0} max={59} />
						</div>
					</div>
					<div class="w-full flex gap-4 items-center justify-between">
						<div>
							<p class="text-sm mb-1 font-semibold text-white">Short Break Time</p>
							<p class="text-sm text-muted-foreground">Duration of the short breaks</p>
						</div>
						<div class="flex items-center gap-2">
							<Input class="w-20 text-center" type="text" min={0} max={60} />
							:
							<Input class="w-20 text-center" type="text" min={0} max={59} />
						</div>
					</div>
					<div class="w-full flex gap-4 items-center justify-between">
						<div>
							<p class="text-sm mb-1 font-semibold text-white">Long Break Time</p>
							<p class="text-sm text-muted-foreground">Duration of the long breaks</p>
						</div>
						<div class="flex items-center gap-2">
							<Input class="w-20 text-center" type="text" min={0} max={60} />
							:
							<Input class="w-20 text-center" type="text" min={0} max={59} />
						</div>
					</div>
					<div class="w-full flex gap-4 items-center justify-between">
						<div>
							<p class="text-sm mb-1 font-semibold text-white">Long Break Interval</p>
							<p class="text-sm text-muted-foreground">How many focus sessions before a long break</p>
						</div>
						<div class="flex items-center gap-2">
							<Input class="w-10 text-center" type="text" min={0} max={60} />
						</div>
					</div>
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
