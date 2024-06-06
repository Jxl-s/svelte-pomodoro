<script>
	import * as DropdownMenu from './ui/dropdown-menu';
	import * as Avatar from './ui/avatar';
	import Button from './ui/button/button.svelte';
	import { signOut } from '@auth/sveltekit/client';

	/** @type {import('@auth/sveltekit').Session} */
	export let session;
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button variant="ghost" builders={[builder]} class="relative h-8 w-8 rounded-full">
			<Avatar.Root class="h-8 w-8">
				<Avatar.Image src={session.user?.image} alt="@{session.user?.name}" />
				<Avatar.Fallback>{session.user?.name?.substring(0, 1) ?? 'U'}</Avatar.Fallback>
			</Avatar.Root>
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="w-56" align="end">
		<DropdownMenu.Label class="font-normal">
			<div class="flex flex-col space-y-1">
				<p class="text-sm font-medium leading-none">{session.user?.name}</p>
				<p class="text-xs leading-none text-muted-foreground">{session.user?.email}</p>
			</div>
		</DropdownMenu.Label>
		<DropdownMenu.Separator />
		<DropdownMenu.Item on:click={() => signOut()}>Log out</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
