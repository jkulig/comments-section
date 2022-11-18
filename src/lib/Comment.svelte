<script>
  import ScoreCounter from './ScoreCounter.svelte';
  import ActionButtons from './ActionButtons.svelte';
  import CommentAdd from './CommentAdd.svelte';
  import CommentEdit from './CommentEdit.svelte';
  import { action, user } from './stores.js';

  export let comment;
  export let reply;

  const articleClasses = 'relative p-4 sm:p-6 bg-white rounded-lg flex flex-col sm:flex-row';

</script>

<article class={reply ? `${articleClasses} ml-4` : articleClasses}>
  <div class="w-full order-1 sm:order-3">
    <div class="flex items-center mb-4 justify-stretch">
      <img class="block mr-4" src={comment.author.avatar.url} alt={comment.author.username} width="30" height="30">
      <strong class="font-medium text-gray-100">{comment.author.username}</strong>
      <span class="inline-block px-1.5 leading-5 text-xs text-white bg-blue-300 ml-2" class:hidden={comment.author.username !== $user.username}>you</span>
      <span class="text-gray-200 mr-auto ml-4">{comment.createdAt}</span>
    </div>
    <p class="text-gray-200 mb-4 {$action && $action.type === 'editing' && $action.commentId === comment.id ? 'hidden' : ''}">
      {#if reply }
        <span class="font-medium text-blue-300">@{comment.rt.username}</span>
      {/if}
      {comment.content}
    </p>
    <CommentEdit comment={comment}></CommentEdit>
  </div>
  <ScoreCounter class="inline-block order-2 sm:mr-6" comment={comment}></ScoreCounter>
  <ActionButtons class="flex justify-end order-3 sm:order-1 sm:absolute -mt-8 mb-2 sm:mt-0.5 sm:top-6 sm:right-6" comment={comment}/>
</article>
<CommentAdd show={$action && $action.type === 'replying' && $action.commentId === comment.id}></CommentAdd>


