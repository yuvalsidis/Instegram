import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { UserInfo } from "../cmps/UserInfo"
import { UserContent } from "../cmps/UserContent"
import { useSelector } from "react-redux"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service"
import { LOADING_DONE, LOADING_START } from "../store/system.reducer"
import { utilService } from "../services/util.service"
import { store } from "../store/store"
import { loadUser } from "../store/user.actions"
import { userService } from "../services/user.service"


export function ProfilePage() {
    const loggedInUser = useSelector(storeState => storeState.userModule.user)
    const watchedUser = useSelector(storeState => storeState.userModule.watchedUser)
    const isLoading = useSelector(storeState => storeState.systemModule.isLoading)

    const { userId } = useParams()
    const defaultUserId = userId || null; 

    useEffect(() => {
        onLoadUser(userId)
    }, [defaultUserId])

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

    console.log('Logged in user : ', loggedInUser)
    console.log('watched user choosed: ', watchedUser)

    if (isLoading) return <div>Loading</div>

    if (watchedUser) return <div>watchedUser </div>
    if (!watchedUser) return <div>no watchedUser</div>

    return (
        <section className="profile-page">
            <UserInfo />
            <UserContent />
        </section>
    )
}