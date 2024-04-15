import { useEffect } from "react";
import { FollowingContainer } from "../cmps/FollowingContainer"

export function FollowersPage() {

    useEffect(() => {
        document.body.classList.add("no-scroll")
        return () => {
            document.body.classList.remove("no-scroll")
        }
    }, [])


    return (
        <section className="following-page">
            <FollowingContainer/>
        </section>
    )
}