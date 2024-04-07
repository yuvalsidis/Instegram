import { PostList } from "./PostList"
import { postService } from "../services/post.service.local"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { removePost, addPost, updatePost, loadPosts } from "../store/post.actions"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service"
import { LOADING_DONE, LOADING_START } from "../store/system.reducer"
import { store } from "../store/store"

export function PostIndex() {
    const posts = useSelector(storeState => storeState.postModule.posts)
    const isLoading = useSelector(storeState => storeState.systemModule.isLoading)
    
    useEffect(() => {
        onLoadPosts()
    }, [])

    function onLoadPosts() {
        store.dispatch({ type: LOADING_START, })
        loadPosts()
            .then(() => {
                showSuccessMsg('Posts loaded successfully')
                store.dispatch({ type: LOADING_DONE, }
                )
            })
            .catch((err) => {
                showErrorMsg('Error occured by loading posts', err)
            })

    }

    if (isLoading) return <div>Loading</div>
    return (
        <div className="post-index">
            <PostList posts={posts} />
        </div>
    )
}