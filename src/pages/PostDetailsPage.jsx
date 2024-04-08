
import {useParams} from "react-router-dom"
import { PostDetails } from "../cmps/PostDetails"
import { postService } from "../services/post.service.local"
import { useState, useEffect } from "react"
import { LOADING_DONE, LOADING_START } from "../store/system.reducer"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service"
import { useSelector } from "react-redux"
import { store } from "../store/store"


export function PostDetailsPage(){
    const [post,SetPost] = useState('null')
    const isLoading = useSelector(storeState => storeState.systemModule.isLoading)

    const {postId} = useParams()

    useEffect(()=>{
        onGetPost()
    },[])

    function onGetPost() {
        store.dispatch({ type: LOADING_START, })
        postService.getById(postId)
            .then((matchedPost) => {
                SetPost(matchedPost)
                showSuccessMsg('Post load successfully')
                store.dispatch({ type: LOADING_DONE, }
                )
            })
            .catch((err) => {
                showErrorMsg('Error occured by load post', err)
            })

    }

    console.log('post is ', post)
    if(isLoading) return <div>Loading</div>
    return(
        <section className="post-details-page">
            <PostDetails/>
        </section>
    )
}