<script>
	import NavBar from '$lib/components/NavBar.svelte';
	import '../app.css';
</script>

<div class="flex flex-col">
	<NavBar />
	<div class="flex-1 space-y-4 p-8 pt-6">
		<slot />
	</div>
</div>
