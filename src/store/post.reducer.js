export const SET_POSTS = 'SET_POSTS'
export const REMOVE_POST = 'REMOVE_POST'
export const ADD_POST = 'ADD_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const UNDO_REMOVE_POST = 'UNDO_REMOVE_POST'


const initialState = {
    posts: [],
    lastRemovedpost: null,
}

export function postReducer(state = initialState, action) {
    var newState = state
    var posts
    switch (action.type) {
        case SET_POSTS:
            newState = { ...state, posts: action.posts }
            break
        case REMOVE_POST:
            const lastRemovedPost = state.posts.find(post => post._id === action.postId)
            posts = state.posts.filter(post => post._id !== action.postId)
            newState = { ...state, posts, lastRemovedPost }
            break
        case ADD_POST:
            newState = { ...state, posts: [...state.posts, action.post] }
            break
        case UPDATE_POST:
            posts = state.posts.map(post => (post._id === action.post._id) ? action.post : post)
            newState = { ...state, posts }
            break
        case UNDO_REMOVE_POST:
            if (state.lastRemovedpost) {
                newState = { ...state, posts: [...state.posts, state.lastRemovedpost], lastRemovedpost: null }
            }
            break
        default:
    }
    return newState
}