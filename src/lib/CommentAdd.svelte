<script>
    import { GraphQLClient, gql } from "graphql-request";
    import Button from './Button.svelte';
    import { comments, user, action } from './stores.js';

    export let show;

    let content;
    let comment;
    let rtUser;
    let mutation;
    let mutationResult;

    function replying() {
        return $action && $action.type === 'replying';
    }

    function createComment() {
        if (!content) {
            action.reset();

            return;
        }

        comments.addComment({
            id: mutationResult.id,
            content: content,
            createdAt: mutationResult.createdAt,
            score: 0,
            author: {
                avatar: {
                    url: $user.avatar.url
                },
                username: $user.username
            },
            parent: replying() ? { id: $action.commentId } : null,
            rt: {
                username: rtUser || null
            }
        });

        content = '';

        action.reset();
    }

    async function postComment() {
        const endpoint = import.meta.env.VITE_HG_ENDPOINT;
        const token = import.meta.env.VITE_HG_TOKEN;
        const client = new GraphQLClient(endpoint, { headers: {
            authorization: `Bearer ${token}`
        } });

        if (replying()) {
            comment = comments.getComment($action.commentId);
            rtUser = comment.author.username;
            mutation = gql`
                mutation {
                    createComment(data: {
                        content: "${content}",
                        score: 0,
                        author: {
                            connect: {
                                username: "${$user.username}"
                            }
                        },
                        parent: {
                            connect: {
                                id: "${comment.id}"
                            }
                        }
                        rt: {
                            connect: {
                                username: "${rtUser}"
                            }
                        }
                    }) {
                        id
                        createdAt
                    }
                }
            `
        } else {
            mutation = gql`
                mutation {
                    createComment(data: {
                        content: "${content}",
                        score: 0,
                        author: {
                            connect: {
                                username: "${$user.username}"
                            }
                        }
                    }) {
                        id
                        createdAt
                    }
                }
            `
        }

        const data = await client.request(mutation);
        mutationResult = data.createComment;

        if (mutationResult) {
            console.log('mutation result', mutationResult);
            createComment();
        }
};
</script>

<div class="{show || 'hidden'} flex flex-wrap sm:flex-nowrap justify-between items-center sm:items-start sm:gap-4 p-4 sm:p-6 bg-white rounded-lg">
    <textarea class="w-full h-20 py-2 px-6 mb-4 border border-gray-500 rounded-md sm:order-2 appearance-none" placeholder="Add a comment..." bind:value={content}></textarea>
    <img class="block w-8 h-8 sm:w-10 sm:h-10 sm:order-1" src={$user.avatar.url} alt={$user.username} width="50" height="50">
    <span class="sm:order-3">
        <Button type="primary" clickHandler={postComment}>Send</Button>
    </span>
</div>