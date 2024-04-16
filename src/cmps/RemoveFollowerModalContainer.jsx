import { RemoveFollowerModal } from "./RemoveFollowerModal"

export function RemoveFollowerModalContainer({isWatchedUser, user}){
    return (
        <section className="remove-follower-modal-container">
            <RemoveFollowerModal isWatchedUser={isWatchedUser} user={user}/>
        </section>
    )
}