import { RemoveFollowerModalContainer } from "./RemoveFollowerModalContainer"
import { useState } from "react"

export function FollowerPreview({ user, isWatchedUser, loggedInUser, userId }) {
    const [isRemoveFollowerModalOpen, setIsRemoveFollowerModalOpen] = useState(false) 
    const isloggedInUserFollowUser = loggedInUser.info.following.some(userFollowing => userFollowing._id === user._id)
    
    function handleClickOnRemoveNFollowing(){
        setIsRemoveFollowerModalOpen(true)
    }

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
                                <button className="following-btn" onClick={handleClickOnRemoveNFollowing}>Following</button>
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
                        <button className="following-btn" onClick={handleClickOnRemoveNFollowing}>Remove</button>
                    </div>
                </>
            }
            {isRemoveFollowerModalOpen && <RemoveFollowerModalContainer  isWatchedUser={isWatchedUser} user={user} userId={userId} setIsRemoveFollowerModalOpen={setIsRemoveFollowerModalOpen}/>}
        
        </>
        
    )
}