<script>
	import { page } from '$app/stores';
	import NavBar from '$lib/components/NavBar.svelte';

	import '../app.css';
</script>

<svelte:head>
	<title>Dark Pomodoro</title>
</svelte:head>

<div class="flex flex-col">
	<NavBar session={$page.data.session ?? null}/>

	<div class="flex-1 space-y-4 p-8 pt-6">
		<slot />
	</div>
</div>
