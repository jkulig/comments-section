<script>
    import Button from './Button.svelte';
    import { comments, action } from './stores';

    export let comment;

    let commentContent = comment.content;

    $: content = commentContent;

    function updateComment() {
        comments.updateComment(comment.id, 'content', content);

        action.reset();
    }
</script>

<div class="{$action && $action.type === 'editing' && $action.commentId === comment.id ? '' : 'hidden'} flex flex-wrap">
    <textarea class="w-full h-20 py-2 px-6 mb-4 border border-gray-500 rounded-md sm:order-2 appearance-none" bind:value={content}></textarea>
    <span class="sm:order-3">
        <Button type="primary" clickHandler={updateComment}>Update</Button>
    </span>
</div>