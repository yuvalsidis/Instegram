
export function FollowerPreview({ user, isWatchedUser, loggedInUser}) {
    

    return (
        <>
            <div className="user-img-container">
                <img className="profilePreviewImg user-img" src={user.imgUrl} alt="profile-img"></img>
            </div>
            <div className="user-names">
                <p className="username-p">{user.username}</p>
                <p className="firstname-secondname-p">{user.firstname} {user.lastname}</p>
            </div>
            {isWatchedUser ?
                <>
                    <div className="follow-btn-container">
                        <button className="following-btn">Following</button>
                    </div>
                </>
                :
                <>
                    <div className="follow-btn-container">
                        <button className="following-btn">Remove</button>
                    </div>
                </>
            }
        </>
    )
}