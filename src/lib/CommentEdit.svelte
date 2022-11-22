<script>
    import { GraphQLClient, gql } from "graphql-request";
    import Button from './Button.svelte';
    import { comments, action } from './stores';

    export let comment;
    let commentContent = comment.content;

    $: content = commentContent;

    async function postComment() {
        const endpoint = import.meta.env.VITE_HG_ENDPOINT;
        const token = import.meta.env.VITE_HG_TOKEN;
        const client = new GraphQLClient(endpoint, { headers: {
            authorization: `Bearer ${token}`
        } });

        const mutation = gql`
            mutation {
                updateComment(
                    where: {
                        id: "${comment.id}"
                    }
                    data: {
                        content: "${content}"
                    }
                ) {
                    id
                }
            }
        `

        const data = await client.request(mutation);
        return data.updateComment;
    }

    function updateComment() {
        comments.updateComment(comment.id, 'content', content);

        postComment().then(() => {
            action.reset();
        }).catch(error => console.log(error));
    }
</script>

<div class="{$action && $action.type === 'editing' && $action.commentId === comment.id ? '' : 'hidden'} flex flex-wrap">
    <textarea class="w-full h-20 py-2 px-6 mb-4 border border-gray-500 rounded-md sm:order-2 appearance-none" bind:value={content}></textarea>
    <span class="sm:order-3">
        <Button type="primary" clickHandler={updateComment}>Update</Button>
    </span>
</div>