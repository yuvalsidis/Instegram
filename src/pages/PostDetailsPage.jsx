
import { useParams } from "react-router-dom"
import { PostDetails } from "../cmps/PostDetails"
import { postService } from "../services/post.service.local"
import { useState, useEffect } from "react"
import { LOADING_DONE, LOADING_START } from "../store/system.reducer"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service"
import { useSelector } from "react-redux"
import { store } from "../store/store"
import { removePost, addPost, updatePost, loadPosts } from "../store/post.actions"

export function PostDetailsPage() {
    const [post, SetPost] = useState(null)
    const isLoading = useSelector(storeState => storeState.systemModule.isLoading)
    const posts = useSelector(storeState => storeState.postModule.posts)
    const isPostDetailsPage = true
    const { postId } = useParams()


    useEffect(() => {
        onGetPost()
    },[])

    function onGetPost() {
        console.log('Trying get post')
        store.dispatch({ type: LOADING_START, })
        postService.getById(postId)
            .then((matchedPost) => {
                SetPost(matchedPost)
                console.log(updatePost)
                showSuccessMsg('Post load successfully')
                store.dispatch({ type: LOADING_DONE, }
                )
            })
            .catch((err) => {
                showErrorMsg('Error occured by load post', err)
            })

    }

    function onUpdatePost(post) {
        updatePost(post)
            .then((updatedPost) => {
                showSuccessMsg('Post updated successfully')
                SetPost(updatedPost)
            })
            .catch((err) => {
                showErrorMsg('Error occured when updating posts', err)
            })
    }

if (isLoading) return <div>Loading</div>
if (post)   return (
    <section className="post-details-page">
        <PostDetails post={post} onUpdatePost={onUpdatePost} isPostDetailsPage={isPostDetailsPage } />
    </section>
)
else{
    return <div>Content Unavailable</div>
}
}