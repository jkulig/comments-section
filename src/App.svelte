<script>
    import CommentCard from './lib/CommentCard.svelte';
    import CommentAdd from './lib/CommentAdd.svelte';
    import data from './data.json';
    import { comments } from './lib/stores.js';

    let currentUser = data.currentUser;

    comments.initComments();
</script>

<main class="py-6 sm:py-16 px-4 mx-auto max-w-3xl flex flex-col space-y-4">
    {#if !$comments.length}
        <p>No comments available</p>
    {:else}
        {#each $comments as comment}
            <CommentCard comment={comment} user={currentUser}></CommentCard>
        {/each}
    {/if}
    <CommentAdd show={true} user={currentUser}></CommentAdd>
</main>

