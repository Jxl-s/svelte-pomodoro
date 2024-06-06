<script>
	import Button from '../ui/button/button.svelte';
	import * as Card from '../ui/card';
	import Input from '../ui/input/input.svelte';
	import FaCirclePlus from '$lib/icons/FaCirclePlus.svelte';
	import TaskListItem from './TaskListItem.svelte';
	import { TaskStatus, createTask, tasksStore } from '$lib/stores/tasks';

	/** @type {string | undefined} */
	let className = undefined;
	export { className as class };

	const tasks = tasksStore.tasks;

	// Inputs
	let taskContent = '';
	const handleAddTask = () => {
		taskContent = taskContent.trim();
		if (taskContent === '') return;

		createTask(taskContent);
		taskContent = '';
	};
</script>

<Card.Root class={className}>
	<Card.Header>
		<Card.Title>Task List</Card.Title>
		<Card.Description>A minimalistic task list to keep track of your work.</Card.Description>
	</Card.Header>
	<Card.Content>
		<div class="flex gap-2">
			<Input placeholder="Task name" class="h-9" bind:value={taskContent} />
			<Button size="sm" on:click={handleAddTask} disabled={taskContent.trim() === ''}>
				<FaCirclePlus class="me-2" />
				Task
			</Button>
		</div>
		<ul class="mt-4">
			{#each $tasks as task, i}
				<TaskListItem
					index={i}
					content={task.content}
					completed={task.status === TaskStatus.Completed}
				/>
			{/each}
		</ul>
	</Card.Content>
</Card.Root>
