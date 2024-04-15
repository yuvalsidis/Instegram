import { useEffect } from "react";
import { FollowersContainer } from "../cmps/FollowersContainer"
import { FollowingContainer } from "../cmps/FollowingContainer"

export function FollowersPage() {

    useEffect(() => {
        document.body.classList.add("no-scroll")
        return () => {
            document.body.classList.remove("no-scroll")
        }
    }, [])


    return (
        <section className="followers-page">
            <FollowersContainer />
            <FollowingContainer/>
        </section>
    )
}