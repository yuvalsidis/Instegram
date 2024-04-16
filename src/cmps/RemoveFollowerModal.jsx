
export function RemoveFollowerModal({isWatchedUser ,user}){

    return (
        <section className="remove-follower-modal">
             <div className="user-img-container">
                <img className="profilePreviewImg user-img" src={user.imgUrl} alt="profile-img"></img>
            </div>
            <div className="remove-follower-modal-desc">
                <p className="question">Remove follower?</p>
                <p className="details">{`instegram won't tell ${user.username} they were removed from your followers`}</p>
            </div>
        </section>
    )
}