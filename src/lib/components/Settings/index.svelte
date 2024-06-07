<script>
	import { browser } from '$app/environment';
	import { settingsStore } from '$lib/stores/timer';
	import * as Card from '../ui/card';
	import Switch from '../ui/switch/switch.svelte';

	/** @type {string | undefined} */
	let className = undefined;
	export { className as class };

	const { notificationEnabled, soundEnabled } = settingsStore;

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

<Card.Root class={className}>
	<Card.Header>
		<Card.Title>Settings</Card.Title>
		<Card.Description>Configure the application to your preferred settings</Card.Description>
	</Card.Header>
	<Card.Content>
		<p class="font-semibold text-lg">Alert Settings</p>
		<div class="grid lg:grid-cols-2 gap-y-4 gap-x-8 items-center mt-4">
			<div class="w-full flex gap-4 items-center justify-between">
				<div>
					<p class="text-sm mb-1">Sound Enabled</p>
					<p class="text-sm text-muted-foreground">
						Enable the playing of sounds when the timer stops.
					</p>
				</div>
				<Switch bind:checked={$soundEnabled} />
			</div>
			<div class="w-full flex gap-4 items-center justify-between">
				<div>
					<p class="text-sm mb-1">Notification Enabled</p>
					<p class="text-sm text-muted-foreground">
						A notification will be sent when the timer stops.
					</p>
				</div>
				<Switch bind:checked={$notificationEnabled} />
			</div>
		</div>
	</Card.Content>
</Card.Root>
