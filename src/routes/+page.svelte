<script>
	import Settings from '$lib/components/Settings/index.svelte';
	import TaskList from '$lib/components/TaskList/index.svelte';
	import Timer from '$lib/components/Timer/index.svelte';
	import SessionShare from '$lib/components/SessionShare/index.svelte';
</script>

<main>
	<div class="grid lg:grid-cols-2 gap-3">
		<Timer class="w-full" />
		<!-- <Settings class="w-full" /> -->
		<TaskList class="w-full" />
		<!-- <SessionShare class="w-full" /> -->
	</div>
</main>
