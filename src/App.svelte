<script>
    import { onMount } from 'svelte';
    import CommentCard from './lib/CommentCard.svelte';
    import CommentAdd from './lib/CommentAdd.svelte';

    import { loadData, user, comments } from './lib/stores.js';

    onMount(() => loadData.then(() => {
            comments.initComments();
            user.setCurrentUser();

            return comments;
        }).catch(error => console.log(error))
    );
</script>

<main class="py-6 sm:py-16 px-4 mx-auto max-w-3xl flex flex-col space-y-4">
    {#if $comments.length}
        {#each $comments as comment}
            <CommentCard comment={comment}></CommentCard>
        {/each}
        <CommentAdd show={true}></CommentAdd>
    {:else}
        <p>Loading...</p>
    {/if}
</main>

