<script>

    import Icon from './Icon.svelte';
    import { comments } from './stores';

    export let comment;

    function increaseScore() {
        if (!comment.voted) {
            comment.score += 1;
            comments.updateComment(comment.id, 'score', comment.score);
            comments.updateComment(comment.id, 'voted', true);
        }
    }

    function decreaseScore() {
        if (!comment.voted) {
            comment.score -= 1;
            comments.updateComment(comment.id, 'score', comment.score);
            comments.updateComment(comment.id, 'voted', true);
        }
    }
</script>

<div class={$$props.class}>
    <div class="inline-flex sm:flex-col sm:w-12 items-center bg-gray-600 rounded-lg font-medium">
        <button class="text-blue-600 font-bold p-4" on:click={increaseScore}><Icon name="plus" class="w-3 h-3"></Icon></button>
        <span class={comment.score < 0 ? 'text-center font-medium bg-gray-600 text-red-200' : 'text-center font-medium bg-gray-600 text-blue-300'}>{comment.score}</span>
        <button class="text-blue-600 font-bold p-4" on:click={decreaseScore}><Icon name="minus" class="w-3 h-3"></Icon></button>
    </div>
</div>