<script>
    import { GraphQLClient, gql } from "graphql-request";
    import Button from './Button.svelte';
    import Icon from './Icon.svelte';
    import { comments, user, action } from './stores';

    export let comment;

    function reply() {
        action.setAction('replying', comment.id);
    }

    function deleteItem() {
        postComment().then(() => {
            comments.deleteComment(comment.id);
        }).catch(error => console.error(error));
    }

    function editItem() {
        action.setAction('editing', comment.id);
    }

    async function postComment() {
        const endpoint = import.meta.env.VITE_HG_ENDPOINT;
        const token = import.meta.env.VITE_HG_TOKEN;
        const client = new GraphQLClient(endpoint, { headers: {
            authorization: `Bearer ${token}`
        } });

        const mutation = gql`
            mutation {
                deleteComment(
                    where: {
                        id: "${comment.id}"
                    }
                ) {
                    id
                }
            }
        `
        const data = await client.request(mutation);
        return data.deleteComment;
    }

</script>

<div class={$$props.class}>
    {#if $user.username === comment.author.username}
        <div class="flex space-x-4">
            <Button type="link-delete" clickHandler={deleteItem}><Icon name="delete" class="w-3.5 h-3.5 inline-block mr-1.5"></Icon>Delete</Button>
            <Button type="link" clickHandler={editItem}><Icon name="edit" class="w-3.5 h-3.5 inline-block mr-1.5"></Icon>Edit</Button>
        </div>
    {:else}
        <Button type="link" clickHandler={reply}><Icon name="reply" class="w-3.5 h-3.5 inline-block mr-1.5"></Icon>Reply</Button>
    {/if}
</div>