import { useState, useEffect } from "react"

import { UserInfo } from "../cmps/UserInfo"
import { UserContent } from "../cmps/UserContent"
import { useSelector } from "react-redux"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service"
import { LOADING_DONE, LOADING_START } from "../store/system.reducer"
import { utilService } from "../services/util.service"


export function ProfilePage() {
    
    return (
        <section className="profile-page">
            <UserInfo />
            <UserContent />
        </section>
    )
}