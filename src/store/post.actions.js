import { postService } from '../services/post.service.local.js'
import { userService } from '../services/user.service.js'
import { store } from '../store/store.js'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { ADD_POST, REMOVE_POST, UPDATE_POST, SET_POSTS, UNDO_REMOVE_POST} from './post.reducer.js'


// Action Creators:
export function getActionRemovePost(postId) {
    return {
        type: REMOVE_POST,
        postId
    }
}
export function getActionAddPost(post) {
    return {
        type: ADD_POST,
        post
    }
}
export function getActionUpdatePost(post) {
    return {
        type: UPDATE_POST,
        post
    }
}


export async function loadPosts(filterBy) {
    console.log('filterByloadpost',filterBy)
    try {
        const posts = await postService.query(filterBy)
        // console.log('posts from DB:', posts)
        store.dispatch({
            type: SET_POSTS,
            posts
        })

    } catch (err) {
        console.log('Cannot load posts', err)
        throw err
    }

}


export async function removePost(postId) {
    try {
        await postService.remove(postId)
        store.dispatch(getActionRemovePost(postId))
    } catch (err) {
        console.log('Cannot remove post', err)
        throw err
    }
}


export async function addPost(post) {
    try {
        const savedpost = await postService.save(post)
        console.log('Added post', savedpost)
        store.dispatch(getActionAddPost(savedpost))
        return savedpost
    } catch (err) {
        console.log('Cannot add post', err)
        throw err
    }
}

export function updatePost(post) {
    return postService.save(post)
        .then(savedPost => {
            // console.log('Updated post:', savedPost)
            store.dispatch(getActionUpdatePost(savedPost))
            return savedPost
        })
        .catch(err => {
            console.log('Cannot save post', err)
            throw err
        })
}


// Demo for Optimistic Mutation 
// (IOW - Assuming the server call will work, so updating the UI first)
export function onRemovepostOptimistic(postId) {
    store.dispatch({
        type: REMOVE_POST,
        postId
    })
    showSuccessMsg('post removed')

    postService.remove(postId)
        .then(() => {
            console.log('Server Reported - Deleted Succesfully');
        })
        .catch(err => {
            showErrorMsg('Cannot remove post')
            console.log('Cannot load posts', err)
            store.dispatch({
                type: UNDO_REMOVE_POST,
            })
        })
}
