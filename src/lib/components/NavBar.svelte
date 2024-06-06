<script>
	import Button from './ui/button/button.svelte';

	// TODO: pass only a user in props
	export let signedIn = false;
	export let username = '';
</script>

<div class="border-b">
	<div class="flex h-16 items-center px-4">
		<a href="/" class="font-bold text-2xl">Dark Pomodoro</a>
		<div class="flex items-center space-x-4 lg:space-x-6 mx-6">
			<a href="/" class="text-sm font-medium transition-colors hover:text-primary">Pomodoro</a>

			<a
				href="/"
				class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
			>
				Statistics
			</a>
		</div>
		<div class="ml-auto flex items-center space-x-4 text-sm">
			{#if signedIn}
				Welcome, {username}
			{:else}
				<Button>Sign In</Button>
			{/if}
		</div>
	</div>
</div>
