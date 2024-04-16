import { RemoveFollowerModal } from "./RemoveFollowerModal"

export function RemoveFollowerModalContainer({isWatchedUser}){
    return (
        <section className="remove-follower-modal-container">
            <RemoveFollowerModal isWatchedUser={isWatchedUser}/>
        </section>
    )
}