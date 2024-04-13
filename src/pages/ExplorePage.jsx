import { ExplorePostList } from "../cmps/ExplorePostList"
import {Outlet } from 'react-router-dom';
import { postService } from "../services/post.service.local"
import { loadPosts } from "../store/post.actions"
import { store } from "../store/store"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service"
import { LOADING_DONE, LOADING_START } from "../store/system.reducer"
import { useSelector } from "react-redux"
import { useState, useEffect } from "react";

export function ExplorePage(){
    const posts = useSelector(storeState => storeState.postModule.posts)
    const [filterBy, setFilterBy] = useState(postService.getDefualtFilterBy)
    const loggedInUser = useSelector(storeState => storeState.userModule.user)
    const isLoading = useSelector(storeState => storeState.systemModule.isLoading)

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


    if (isLoading) return <div>Loading Posts</div>
    return (
        <section className="explore-page">
            <ExplorePostList posts={posts}/>
            <Outlet />
        </section>
    )
}