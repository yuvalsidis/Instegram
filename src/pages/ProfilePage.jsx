import { UserInfo } from "../cmps/UserInfo"
import { UserContent } from "../cmps/UserContent"

export function ProfilePage() {
    return (
        <section className="profile-page">
            <UserInfo />
            <UserContent/>
        </section>
    )
}