import { RemoveFollowerModal } from "./RemoveFollowerModal"

export function RemoveFollowerModalContainer({isWatchedUser, user, userId, setIsRemoveFollowerModalOpen}){
    return (
        <section className="remove-follower-modal-container">
            <RemoveFollowerModal isWatchedUser={isWatchedUser} user={user} userId={userId} setIsRemoveFollowerModalOpen={setIsRemoveFollowerModalOpen}/>
        </section>
    )
}