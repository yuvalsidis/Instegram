import { RemoveFollowerModalContainer } from "./RemoveFollowerModalContainer"
import { useState } from "react"
import { useLocation } from 'react-router-dom'
import { useNavigate, useParams } from "react-router-dom"
import { userService } from "../services/user.service"

export function FollowerPreview({ user, isWatchedUser, loggedInUser, userId, onUpdateUsers, fullUser }) {
    const [isRemoveFollowerModalOpen, setIsRemoveFollowerModalOpen] = useState(false)
    const isloggedInUserFollowUser = loggedInUser.info.following.some(userFollowing => userFollowing._id === user._id)
    const location = useLocation()
    const navigate = useNavigate()

    function handleClickOnRemoveNFollowing() {
        setIsRemoveFollowerModalOpen(true)
    }

    function handleOnClickPhoto() {
        user._id === loggedInUser._id ? navigate('/profile') : navigate(`/profile/${user._id}`)
    }

    async function handleClickOnFollow() {
        try {
            console.log('hi!!!!!', user._id)
            const userToUpdate = await userService.getById(user._id)
            const updatedLoggedInUser = {
                ...loggedInUser,
                info: {
                    ...loggedInUser.info,
                    following: [
                        ...loggedInUser.info.following,
                        {
                            _id: user._id,
                            username: user.username,
                            firstname: user.firstname,
                            lastname: user.lastname,
                            imgUrl: user.imgUrl
                        }
                    ]
                }
            }
            const updatedUserOnAct = {
                ...userToUpdate,
                info: {
                    ...userToUpdate.info,
                    followers: [
                        ...userToUpdate.info.followers,
                        {
                            _id: loggedInUser._id,
                            username: loggedInUser.username,
                            firstname: loggedInUser.firstname,
                            lastname: loggedInUser.lastname,
                            imgUrl: loggedInUser.imgUrl
                        }
                    ]
                }
            }
            onUpdateUsers(updatedLoggedInUser, updatedUserOnAct)
        }
        catch (err) {
            console.log('couldnt fetch user to follow or unfollow from service', err)
        }
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
                    {user._id !== loggedInUser._id &&
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
                                        <button className="follow-btn" onClick={handleClickOnFollow}>Follow</button>
                                    </div>
                                </>
                            }
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