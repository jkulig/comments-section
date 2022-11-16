import { writable } from 'svelte/store';
import data from '../data.json';

let commentsData = data.comments;

function createComments() {
    const { subscribe, update, set } = writable([]);

    let stack;

    subscribe(val => stack = val);

    // Updates given properties on specified comment, takes comments from update method callback
    function updatedComments(comments, commId, prop, val) {
        let currentComment = getComment(commId);
        let otherComments = comments.filter(comm => comm.id !== commId);

        currentComment[prop] = val;

        return [...otherComments, currentComment].sort((a, b) => b.score - a.score);
    }

    function initComments() {
        return set(commentsData);
    }

    function getComment(commId) {
        return stack.filter(
            comment => comment.id === commId
        )[0];
    }

    function getReplies(commId) {
        let replies = [];
        stack.forEach(
            comment => {
                if (comment.parentId && comment.parentId === commId) {
                    replies.push(comment.id);
                }
            }
        )

        return replies;
    }

    function getCommentProp(commId, prop) {
        const comment = getComment(commId);

        return comment[this.props.first];
    }

    function addComment(newComment) {
        return update(
            comments => [...comments, newComment]
        );
    }

    function deleteComment(commId) {
        return update(
            comments => comments.filter(
                comment => comment.id !== commId
            )
        );
    }

    function updateComment(commId, prop, val) {
        return update(
            comments => updatedComments(comments, commId, prop, val)
        );
    }

    return {
        subscribe,
        initComments,
        getComment,
        addComment,
        deleteComment,
        updateComment,
        getReplies,
        getCommentProp
    }
}

function createAction() {
    const { subscribe, set } = writable(null);

    function setAction(action, commentId) {
        return set({
            type: action,
            commentId: commentId
        });
    }

    function reset() {
        return set(null);
    }

    return {
        subscribe,
        setAction,
        reset
    }
}

export const comments = createComments();
export const action = createAction();
