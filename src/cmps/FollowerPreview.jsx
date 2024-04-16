import { RemoveFollowerModalContainer } from "./RemoveFollowerModalContainer"
import { useState } from "react"
import { useLocation } from 'react-router-dom'
import { useNavigate, useParams } from "react-router-dom"

export function FollowerPreview({ user, isWatchedUser, loggedInUser, userId, onUpdateUsers, fullUser }) {
    const [isRemoveFollowerModalOpen, setIsRemoveFollowerModalOpen] = useState(false)
    const isloggedInUserFollowUser = loggedInUser.info.following.some(userFollowing => userFollowing._id === user._id)
    const location = useLocation()
    const navigate = useNavigate()
    
    function handleClickOnRemoveNFollowing() {
        setIsRemoveFollowerModalOpen(true)
    }

    function handleOnClickPhoto(){
        user._id === loggedInUser._id?  navigate('/profile') : navigate(`/profile/${user._id}`)
    }

    return (
        <>
            <div className="user-img-container">
                <img className="profilePreviewImg user-img" onClick={handleOnClickPhoto} src={user.imgUrl} alt="profile-img"></img>
            </div>
            <div className="user-names">
                <p className="username-p">{user.username}</p>
                <p className="firstname-secondname-p">{user.firstname} {user.lastname}</p>
            </div>
            {location.pathname.includes('followers') && !isWatchedUser ?
                <>
                    <div className="follow-btn-container">
                        <button className="following-btn" onClick={handleClickOnRemoveNFollowing}>Remove</button>
                    </div>
                </>
                :
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
            }
            {isRemoveFollowerModalOpen &&
                <RemoveFollowerModalContainer
                    isWatchedUser={isWatchedUser}
                    user={user}
                    userId={userId}
                    setIsRemoveFollowerModalOpen={setIsRemoveFollowerModalOpen}
                    onUpdateUsers={onUpdateUsers}
                    loggedInUser={loggedInUser}
                    fullUser={fullUser}
                />
            }

        </>

    )
}