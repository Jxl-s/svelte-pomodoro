<script>
	import Button from '../ui/button/button.svelte';
	import * as Card from '../ui/card';
	import * as Avatar from '../ui/avatar';

	/** @type {string | undefined} */
	let className = undefined;
	export { className as class };
</script>

<Card.Root class={className}>
	<Card.Header>
		<Card.Title>Session Share</Card.Title>
		<Card.Description>Share your session with other users</Card.Description>
	</Card.Header>
	<Card.Content>
		<!-- <Button>Start Session Share</Button> -->
		<p class="font-semibold">Current Users</p>
		<div class="flex mt-1 gap-2">
			<Button variant="ghost" class="relative h-8 w-8 rounded-full">
				<Avatar.Root class="h-8 w-8">
					<Avatar.Image alt="@hi" />
					<Avatar.Fallback>{'U'}</Avatar.Fallback>
				</Avatar.Root>
			</Button>
		</div>
	</Card.Content>
</Card.Root>
