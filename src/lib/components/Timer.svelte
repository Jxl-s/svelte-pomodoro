<script>
	import Button from './ui/button/button.svelte';
	import * as Card from './ui/card';

	/** @type {string | undefined} */
	let className = undefined;
	export { className as class };
</script>

<Card.Root class={className}>
	<Card.Header>
		<Card.Title>Focus Timer</Card.Title>
		<Card.Description>A minimalistic timer for your work sessions.</Card.Description>
	</Card.Header>
	<Card.Content>
		<!-- Session Type -->
		<header class="grid grid-cols-3 gap-2">
			<Button size="sm">Focus</Button>
			<Button size="sm" variant="outline">Short Break</Button>
			<Button size="sm" variant="outline">Long Break</Button>
		</header>

		<!-- Timer indicator -->
		<section class="my-4 text-center">
			<p class="text-4xl font-mono border p-2 rounded-md">00:00</p>
		</section>

		<!-- Timer controls -->
		<section class="grid">
			<Button>Start</Button>
		</section>
	</Card.Content>
</Card.Root>
