import { RemoveFollowerModalContainer } from "./RemoveFollowerModalContainer"

export function FollowerPreview({ user, isWatchedUser, loggedInUser }) {
    const isloggedInUserFollowUser = loggedInUser.info.following.some(userFollowing => userFollowing._id === user._id)
    
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
                    {isloggedInUserFollowUser ?
                        <>
                            <div className="follow-btn-container">
                                <button className="following-btn">Following</button>
                            </div>
                        </>
                        :
                        <>
                            <div className="follow-btn-container">
                                <button className="follow-btn">Follow</button>
                            </div>
                        </>

                    }
                </>

                :
                <>
                    <div className="follow-btn-container">
                        <button className="following-btn">Remove</button>
                    </div>
                </>
            }
             <RemoveFollowerModalContainer  isWatchedUser={isWatchedUser} user={user}/>
        </>
        
    )
}