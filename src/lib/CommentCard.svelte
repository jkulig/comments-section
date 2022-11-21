<script>
	import Comment from './Comment.svelte';
	import { comments } from './stores';

	export let comment;

	$: replies = $comments.filter(comm => comm.parent && comm.parent.id === comment.id);

</script>

{#if !comment.parent}
	<Comment comment={comment} reply={false}></Comment>
{/if}

{#if replies.length}
<div class="flex">
	<div class="flex justify-center sm:pl-10 sm:pr-8">
		<span class="block border-r-2 border-gray-500 h-auto"></span>
	</div>
	<div class="flex flex-col w-full space-y-4">
		{#each replies as reply}
			<Comment comment={reply} reply={true}></Comment>
		{/each}
	</div>
</div>
{/if}