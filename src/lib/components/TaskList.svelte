<script>
	import Button from './ui/button/button.svelte';
	import * as Card from './ui/card';
	import Input from './ui/input/input.svelte';

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
		<div class="flex gap-2 max-w-sm">
			<Input placeholder="Task name" />
			<Button size="sm">+ Task</Button>
		</div>
		<div class="mt-4 grid lg:grid-cols-2">
			<div>
				<p class="font-semibold">To Do</p>
				<p class="text-muted-foreground text-sm">List of tasks left to do</p>
			</div>
			<div>
				<p class="font-semibold">Completed</p>
				<p class="text-muted-foreground text-sm">List of completed tasks for the session</p>
			</div>
		</div>
	</Card.Content>
</Card.Root>
