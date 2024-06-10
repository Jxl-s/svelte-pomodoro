<script>
	import FaTrashCan from '$lib/icons/FaTrashCan.svelte';
	import FaSquareCheck from '$lib/icons/FaSquareCheck.svelte';
	import Button from '../ui/button/button.svelte';
	import * as DropdownMenu from '../ui/dropdown-menu';
	import FaForward from '$lib/icons/FaForward.svelte';
	import { TaskStatus, deleteTask, updateTaskStatus } from '$lib/stores/tasks';
	import { fade } from 'svelte/transition';

	/** @type {number} */
	export let index;
	/** @type {string} */
	export let content;
	export let completed = false;

	const handleDelete = () => {
		deleteTask(index);
	};

	const handleComplete = () => {
		updateTaskStatus(index, content, TaskStatus.Completed);
	};

	const handleMarkAsToDo = () => {
		updateTaskStatus(index, content, TaskStatus.Active);
	};
</script>

<li
	in:fade
	class="rounded-md border px-4 py-1 my-1 flex items-center justify-between text-sm {completed &&
		'bg-green-400/25'}"
>
	<div>
		{#if completed}
			<FaSquareCheck class="text-green-400 me-3 inline" />
		{:else}
			<span class="font-semibold me-3">{index + 1}</span>
		{/if}
		<span>
			{content}
		</span>
	</div>

	<DropdownMenu.Root>
		<DropdownMenu.Trigger asChild let:builder>
			<Button variant="ghost" builders={[builder]} class="h-8 w-8">...</Button>
		</DropdownMenu.Trigger>
		<DropdownMenu.Content class="w-56" align="end">
			{#if completed}
				<DropdownMenu.Item class="text-yellow-400 font-semibold" on:click={handleMarkAsToDo}>
					<FaForward class="me-2 rotate-180" />
					Mark as To Do
				</DropdownMenu.Item>
			{:else}
				<DropdownMenu.Item class="text-green-400 font-semibold" on:click={handleComplete}>
					<FaSquareCheck class="me-2" />
					Complete
				</DropdownMenu.Item>
			{/if}

			<DropdownMenu.Item class="text-red-400 font-semibold" on:click={handleDelete}>
				<FaTrashCan class="me-2" />
				Delete
			</DropdownMenu.Item>
		</DropdownMenu.Content>
	</DropdownMenu.Root>
</li>
