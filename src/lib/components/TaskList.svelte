<script>
	import * as Card from './ui/card';

	/** @type {string | undefined} */
	let className = undefined;
	export { className as class };
</script>

<Card.Root class={className}>
	<Card.Header>
		<Card.Title>Task List</Card.Title>
		<Card.Description>A minimalistic task list to keep track of your work.</Card.Description>
	</Card.Header>
	<Card.Content></Card.Content>
</Card.Root>
