<script>
	import FaTrashCan from '$lib/icons/FaTrashCan.svelte';
	import FaSquareCheck from '$lib/icons/FaSquareCheck.svelte';
	import Button from './ui/button/button.svelte';
	import * as DropdownMenu from './ui/dropdown-menu';
	import FaForward from '$lib/icons/FaForward.svelte';

	/** @type {number} */
	export let index;
	/** @type {string} */
	export let content;
	export let completed = false;
</script>

<li
	class="rounded-md border px-4 py-1 my-1 flex items-center justify-between text-sm {completed &&
		'bg-green-400/25'}"
>
	<div>
		{#if completed}
			<FaSquareCheck class="text-green-400 me-3 inline" />
		{:else}
			<span class="font-semibold me-3">{index}</span>
		{/if}
		<span>{content}</span>
	</div>

	<DropdownMenu.Root>
		<DropdownMenu.Trigger asChild let:builder>
			<Button variant="ghost" builders={[builder]} class="h-8 w-8">...</Button>
		</DropdownMenu.Trigger>
		<DropdownMenu.Content class="w-56" align="end">
			{#if completed}
				<DropdownMenu.Item class="text-yellow-400 font-semibold">
					<FaForward class="me-2 rotate-180" />
					Mark as To Do
				</DropdownMenu.Item>
			{:else}
				<DropdownMenu.Item class="text-green-400 font-semibold">
					<FaSquareCheck class="me-2" />
					Complete
				</DropdownMenu.Item>
			{/if}

			<DropdownMenu.Item class="text-red-400 font-semibold">
				<FaTrashCan class="me-2" />
				Delete
			</DropdownMenu.Item>
		</DropdownMenu.Content>
	</DropdownMenu.Root>
</li>
