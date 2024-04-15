
export function FollowerPreview({user, isWatchedUser}) {
    return (
        <>
            <div className="user-img">
                  <img src={user.imgUrl} alt="profile-img"></img>
            </div>
            <div className="user-names">
                 <p>{user.username}</p>
                 <p>{user.firstname} {user.lastname}</p>
            </div>
            <div className="follow-btn-action">
                <button>Following</button>
            </div>
        </>
    )
}