<script>
	import TaskList from '$lib/components/TaskList.svelte';
	import Timer from '$lib/components/Timer/index.svelte';
</script>

<main>
	<div class="grid gap-3">
		<Timer class="w-full max-w-lg" />
		<TaskList class="w-full max-w-lg" />
	</div>
</main>
