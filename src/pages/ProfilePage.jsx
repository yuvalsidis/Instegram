import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Outlet } from "react-router-dom"

import { UserInfo } from "../cmps/UserInfo"
import { UserContent } from "../cmps/UserContent"
import { useSelector } from "react-redux"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service"
import { LOADING_DONE, LOADING_START, POST_NOT_CREATED } from "../store/system.reducer"
import { utilService } from "../services/util.service"
import { store } from "../store/store"
import { loadUser } from "../store/user.actions"
import { userService } from "../services/user.service"
import { ProfileContentFilter } from "../cmps/ProfileContentFilter"
import { postService } from "../services/post.service.local"
import { loadPosts } from "../store/post.actions"


export function ProfilePage() {
    const [postsLoaded, setPostsLoaded] = useState(false);
    const posts = useSelector(storeState => storeState.postModule.posts)
    const loggedInUser = useSelector(storeState => storeState.userModule.user)
    const watchedUser = useSelector(storeState => storeState.userModule.watchedUser)
    const isPostCreated = useSelector(storeState => storeState.systemModule.isPostCreated)
    const [isLoadingPosts, setIsLoadingPosts] = useState(true)
    const isLoadingUsers = useSelector(storeState => storeState.systemModule.isLoading)
    const [filterBy, setFilterBy] = useState(postService.getDefualtFilterBy)
    const [sortBy, setSortBy] = useState(postService.getDefaultSortBy)
    const [isFirstRun, setIsFirstRun] = useState(true);

    const { userId } = useParams()
    let defaultUserId = userId || null;
    console.log('ispostcreated>?????????????????', isPostCreated)
    if (userId === loggedInUser._id) {
        defaultUserId = null
    }
    useEffect(() => {
        onLoadUser(defaultUserId)
    }, [defaultUserId])

    useEffect(() => {
        if (watchedUser) setFilterBy((prevFilterBy) => ({ ...prevFilterBy, _id: watchedUser._id }))
        else setFilterBy((prevFilterBy) => ({ ...prevFilterBy, _id: loggedInUser._id }))
        setSortBy((prevSortBy) => ({ ...prevSortBy, desc: -1 }))
        store.dispatch({ type: POST_NOT_CREATED, })
    }, [watchedUser, loggedInUser, isPostCreated])

    useEffect(() => {
        onLoadPosts();
    }, [filterBy, sortBy])


    function onLoadPosts() {
        setIsLoadingPosts(true)
        loadPosts(filterBy, sortBy)
            .then(() => {
                showSuccessMsg('Posts loaded successfully')
                setIsLoadingPosts(false)
                setPostsLoaded(true)
                setIsFirstRun(false);
            })
            .catch((err) => {
                showErrorMsg('Error occured by loading posts', err)
            })

    }

    function onLoadUser(userId) {
        store.dispatch({ type: LOADING_START, })
        loadUser(userId)
            .then(() => {
                showSuccessMsg(' watched user load Successfully')
                store.dispatch({ type: LOADING_DONE, })
            })
            .catch((err) => {
                showErrorMsg('there was a problem with loading user', err)
            })
    }

    if(isFirstRun) return null
    return (
        <section className="profile-page main">
            <div className="profile-main-content-container">
                <UserInfo watchedUser={watchedUser} loggedInUser={loggedInUser} />
                <ProfileContentFilter watchedUser={watchedUser} loggedInUser={loggedInUser} setFilterBy={setFilterBy} filterBy={filterBy} />
                <UserContent posts={posts} watchedUser={watchedUser} loggedInUser={loggedInUser} isLoadingPosts={isLoadingPosts} />
            </div>
            <Outlet />
        </section>
    )
}