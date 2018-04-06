// A reducer takes in two things

// 1. The action (info about what happened)
// 2. Copy of our current state

function postComment(state = [], action) {
    switch(action.type) {
        case 'ADD_COMMENT':
        // return the new state with the new comment
        return [...state, {
            user: action.author,
            text: action.comment
        }];

        case 'REMOVE_COMMENT':
        // we need to return the new state without the deleted
        return [
            // from the start to te one we want to delete
            ...state.slice(0, action.i),
            // after the deleted one
            ...state.slice(action.i +1)
        ]
        default:
            return state
    }
    return state;
}

function comments(state = [], action) {
    if (typeof action.postId !== 'undefined') {
        return { 
            // take the current state
            ...state,
            // overwrite this post with a new one
            [action.postId]: postComment(state[action.postId], action)
        }
    }
    return state;
}

export default comments;
