import { useState, useEffect } from "react"

import { UserInfo } from "../cmps/UserInfo"
import { UserContent } from "../cmps/UserContent"
import { useSelector } from "react-redux"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service"
import { LOADING_DONE, LOADING_START } from "../store/system.reducer"
import { utilService } from "../services/util.service"
import { store } from "../store/store"
import { loadUsers } from "../store/user.actions"


export function ProfilePage() {
    const loggedInUser = useSelector(storeState => storeState.userModule.user)
    
    useEffect(()=>{

    }, [])

    // onLoadUsers

    console.log('user',loggedInUser)

    if(LOADING_START) return <div>Loading</div>
    return (
        <section className="profile-page">
            <UserInfo />
            <UserContent />
        </section>
    )
}