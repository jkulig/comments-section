<script>
    import Button from './Button.svelte';
    import Icon from './Icon.svelte';
    import { comments, action } from './stores';

    export let comment;
    export let user;

    function reply() {
        action.setAction('replying', comment.id);
    }

    function deleteItem() {
        comments.deleteComment(comment.id);
    }

    function editItem() {
        action.setAction('editing', comment.id);
    }

</script>

<div class={$$props.class}>
    {#if user.username === comment.user.username}
        <div class="flex space-x-4">
            <Button type="link-delete" clickHandler={deleteItem}><Icon name="delete" class="w-3.5 h-3.5 inline-block mr-1.5"></Icon>Delete</Button>
            <Button type="link" clickHandler={editItem}><Icon name="edit" class="w-3.5 h-3.5 inline-block mr-1.5"></Icon>Edit</Button>
        </div>
    {:else}
        <Button type="link" clickHandler={reply}><Icon name="reply" class="w-3.5 h-3.5 inline-block mr-1.5"></Icon>Reply</Button>
    {/if}
</div>