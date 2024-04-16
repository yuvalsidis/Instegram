import { RemoveFollowerModal } from "./RemoveFollowerModal"

export function RemoveFollowerModalContainer({isWatchedUser, user, userId, setIsRemoveFollowerModalOpen, onUpdateUsers, loggedInUser, fullUser={fullUser}}){
    return (
        <section className="remove-follower-modal-container">
            <RemoveFollowerModal 
            isWatchedUser={isWatchedUser} 
            user={user} 
            userId={userId} 
            setIsRemoveFollowerModalOpen={setIsRemoveFollowerModalOpen}
            onUpdateUsers = {onUpdateUsers}
            loggedInUser={loggedInUser}
            fullUser={fullUser}
            />
        </section>
    )
}