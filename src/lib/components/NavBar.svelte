<script>
	import NavLink from './NavLink.svelte';
	import Button from './ui/button/button.svelte';
	import { signIn, signOut } from '@auth/sveltekit/client';

	/** @type {import('@auth/sveltekit').Session | null} */
	export let session;

	const handleSignIn = () => signIn('google');
	const handleSignOut = () => signOut();
</script>

<div class="border-b">
	<div class="flex h-16 items-center px-4">
		<a href="/" class="font-bold text-2xl">Dark Pomodoro</a>
		<div class="flex items-center space-x-4 lg:space-x-6 mx-6">
			<NavLink href="/" active={true}>Pomodoro</NavLink>
			<NavLink href="/" active={false}>Statistics</NavLink>
		</div>
		<div class="ml-auto flex items-center space-x-4 text-sm">
			{#if session}
				<img src={session.user?.image} alt="User avatar" class="w-8 h-8 rounded-full" />
			{:else}
				<Button on:click={handleSignIn}>Sign In</Button>
			{/if}
		</div>
	</div>
</div>
