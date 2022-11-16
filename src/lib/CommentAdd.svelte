<script>
    import Button from './Button.svelte';
    import { comments, action } from './stores.js';
    import ShortUniqueId from 'short-unique-id';

    export let show;
    export let user;

    let content;


    function generateUID() {
        const uid = new ShortUniqueId();
        return uid();
    }

    function replying() {
        return $action && $action.type === 'replying';
    }

    function createComment() {
        if (!content) {
            action.reset();

            return;
        }

        let rtUser = null;

        if (replying()) {
            const comment = comments.getComment($action.commentId);
            rtUser = comment.user.username;
        }

        comments.addComment({
            id: generateUID(),
            content: content,
            createdAt: "now",
            score: 0,
            voted: true,
            user: {
                image: {
                    webp: user.image.webp
                },
                username: user.username
            },
            type: replying() ? "child" : "parent",
            parentId: replying() ? $action.commentId : null,
            rt: rtUser || null
        });

        content = '';

        action.reset();
    }
</script>

<div class="{show || 'hidden'} flex flex-wrap sm:flex-nowrap justify-between items-center sm:items-start sm:gap-4 p-4 sm:p-6 bg-white rounded-lg">
    <textarea class="w-full h-20 py-2 px-6 mb-4 border border-gray-500 rounded-md sm:order-2 appearance-none" placeholder="Add a comment..." bind:value={content}></textarea>
    <img class="block w-8 h-8 sm:w-10 sm:h-10 sm:order-1" src={user.image.webp} alt={user.username} width="50" height="50">
    <span class="sm:order-3">
        <Button type="primary" clickHandler={createComment}>Send</Button>
    </span>
</div>