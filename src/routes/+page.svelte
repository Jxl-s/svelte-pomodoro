<script>
	import TaskList from '$lib/components/TaskList/index.svelte';
	import Timer from '$lib/components/Timer/index.svelte';
</script>

<main>
	<div class="grid lg:grid-cols-2 gap-3">
		<Timer class="w-full" />
		<TaskList class="w-full" />
	</div>
</main>
