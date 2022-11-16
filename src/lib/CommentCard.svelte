<script>
    import Comment from './Comment.svelte';
    import { comments } from './stores';

    export let comment;
    export let user;
</script>

{#if comment.type === "parent"}
  <Comment comment={comment} user={user} reply={false}></Comment>
{/if}

{#if comments.getReplies(comment.id).length}
  <div class="flex">
    <div class="flex justify-center sm:pl-10 sm:pr-8">
      <span class="block border-r-2 border-gray-500 h-auto"></span>
    </div>
    <div class="flex flex-col w-full space-y-4">
        {#each comments.getReplies(comment.id) as reply}
          <Comment comment={comments.getComment(reply)} user={user} reply={true}></Comment>
        {/each}
    </div>
  </div>
{/if}