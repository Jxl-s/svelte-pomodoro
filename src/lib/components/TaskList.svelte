<script>
	import Button from './ui/button/button.svelte';
	import * as Card from './ui/card';
	import Input from './ui/input/input.svelte';
	import * as DropdownMenu from './ui/dropdown-menu';
	import * as Avatar from './ui/avatar';
	import FaCirclePlus from '$lib/icons/FaCirclePlus.svelte';
	import TaskListItem from './TaskListItem.svelte';
	/** @type {string | undefined} */
	let className = undefined;
	export { className as class };
</script>

<Card.Root class={className}>
	<Card.Header>
		<Card.Title>Task List</Card.Title>
		<Card.Description>A minimalistic task list to keep track of your work.</Card.Description>
	</Card.Header>
	<Card.Content>
		<div class="flex gap-2">
			<Input placeholder="Task name" />
			<Button>
				<FaCirclePlus class="me-2" />
				Task
			</Button>
		</div>
		<div class="mt-4 gap-4">
			<div>
				<p class="font-semibold">To Do</p>
				<p class="text-muted-foreground text-sm">List of tasks left to do</p>
				<ul class="mt-2">
					<TaskListItem index={1} content="study chapter 2" />
					<TaskListItem index={2} content="do exercise set 3" completed />
				</ul>
			</div>
		</div>
	</Card.Content>
</Card.Root>
