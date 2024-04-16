
export function RemoveFollowerModal({isWatchedUser ,user}){

    return (
        <section className="remove-follower-modal">
             <div className="user-img-container">
                <img className="profilePreviewImg user-img" src={user.imgUrl} alt="profile-img"></img>
            </div>
        </section>
    )
}