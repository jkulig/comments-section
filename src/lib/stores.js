
import { GraphQLClient, gql } from "graphql-request";
import { writable } from 'svelte/store';

let appData;

// let commentsData = [];
async function load() {
    const endpoint = 'https://api-us-east-1.hygraph.com/v2/cl711843e23ds01t89xxebyyr/master';
    const client = new GraphQLClient(endpoint, { headers: {} });
    const query = gql`
{
    comments {
        content
        createdAt
        id
        score
        parent {
            id
        }
        rt {
            username
        }
        author {
            username
            avatar {
                url
            }
        }
    }
    author(where: {username: "juliusomo"}) {
        id
        username
        avatar {
            url
        }
    }
}
`

    const data = await client.request(query);
    appData = data;
};


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
        return set(appData.comments);
    }

    function getComment(commId) {
        return stack.filter(
            comment => comment.id === commId
        )[0];
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
        getCommentProp
    }
}

function createUser() {
    const { subscribe, set } = writable(null);

    function setCurrentUser() {
        return set(appData.author);
    }

    return {
        subscribe,
        setCurrentUser
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

export const loadData = load();
export const comments = createComments();
export const user = createUser();
export const action = createAction();
