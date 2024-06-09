<script>
	import Input from '../ui/input/input.svelte';

	/** @type {string}*/
	export let title;
	/** @type {string}*/
	export let description;
	export let value = 0;
</script>

<div class="w-full flex gap-4 items-center justify-between">
	<div>
		<p class="text-sm mb-1 font-semibold text-white">{title}</p>
		<p class="text-sm text-muted-foreground">{description}</p>
	</div>
	<div class="flex items-center gap-2">
		<Input bind:value class="w-20 text-center" type="number" min={0} max={59} />
	</div>
</div>
