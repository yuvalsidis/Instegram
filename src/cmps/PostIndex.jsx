import { PostList } from "./PostList"
import { postService } from "../services/post.service.local"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { removePost, addPost, updatePost, loadPosts } from "../store/post.actions"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service"
import { LOADING_DONE, LOADING_START } from "../store/system.reducer"
import { store } from "../store/store"
import { OptionsModal } from "./OptionsModal"


export function PostIndex() {
    const posts = useSelector(storeState => storeState.postModule.posts)
    const isLoading = useSelector(storeState => storeState.systemModule.isLoading)
    const [filterBy, setFilterBy] = useState(postService.getDefualtFilterBy)
    const loggedInUser = useSelector(storeState => storeState.userModule.user)
    const [isOptionsModalOpen, setIsOptionsModalOpen] = useState(false)
    
    useEffect(() => {
        onLoadPosts()
    }, [filterBy])

    useEffect(() =>{
        setFilterBy((prevFilterBy) => ({...prevFilterBy, loggedInUser_id: loggedInUser._id }))
    },[loggedInUser])
    
    function onLoadPosts() {
        store.dispatch({ type: LOADING_START, })
        loadPosts(filterBy)
            .then(() => {
                showSuccessMsg('Posts loaded successfully')
                store.dispatch({ type: LOADING_DONE, }
                )
            })
            .catch((err) => {
                showErrorMsg('Error occured by loading posts', err)
            })

    }

    function onUpdatePost(post) {
        updatePost(post)
            .then(() => {
                showSuccessMsg('Post updated successfully')
            })
            .catch ((err) => {
                showErrorMsg('Error occured when updating posts', err)
            })
    }

    console.log('posts in PostIndex',posts)

    if (isLoading) return <div>Loading</div>
    return (
        <div className="post-index">
            <PostList 
            posts={posts} 
            onUpdatePost={onUpdatePost} 
            loggedInUser={loggedInUser} 
            setIsOptionsModalOpen={setIsOptionsModalOpen} 
            />
            {isOptionsModalOpen? <OptionsModal setIsOptionsModalOpen={setIsOptionsModalOpen}/> : ""}
        </div>
    )
}