<script>
	import * as Card from '../ui/card';

	/** @type {string | undefined} */
	let className = undefined;
	export { className as class };
</script>

<Card.Root class={className}>
	<Card.Header>
		<Card.Title>Settings</Card.Title>
		<Card.Description>Configure the application to your preferred settings</Card.Description>
	</Card.Header>
	<Card.Content></Card.Content>
</Card.Root>
