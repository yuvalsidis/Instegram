import { useLocation } from 'react-router-dom'
import { useNavigate, useParams } from "react-router-dom"

export function RemoveFollowerModal({ isWatchedUser, user, userId, setIsRemoveFollowerModalOpen, onUpdateUsers, loggedInUser, fullUser }) {
    const location = useLocation()
    const navigate = useNavigate()

    console.log(onUpdateUsers)

    function handleClickOnCancel() {
        setIsRemoveFollowerModalOpen(false)
    }

    function handleOnClickPhoto(){
        user._id === loggedInUser._id?  navigate('/profile') : navigate(`/profile/${user._id}`)
    }

    function handleClickOnRemove() {
        const updatedFullUser =
        {
            ...fullUser,
            info: {
                ...fullUser.info,
                followers: fullUser.info.followers.filter(followUser => followUser._id !== user._id)
            }
        }
        const updateUserOnAct =
        {
            ...user,
            info: {
                ...user.info,
                following: fullUser.info.following.filter(followUser => followUser._id !== user._id)
            }
        }
        onUpdateUsers(updatedFullUser, updateUserOnAct)
        setIsRemoveFollowerModalOpen(false)
        console.log('removed')
    }

    function handleClickOnUnfollow() {
        const updatedLoggedInUser =  {
            ...loggedInUser,
            info: {
                ...loggedInUser.info,
                following: loggedInUser.info.following.filter(followingUser => followingUser._id !== user._id)
            }
        }
        const updateUserOnAct ={
            ...user,
            info: {
                ...user.info,
                followers: fullUser.info.followers.filter(followUser => followUser._id !== loggedInUser._id)
            }
        }
        onUpdateUsers(updatedLoggedInUser, updateUserOnAct)
        setIsRemoveFollowerModalOpen(false)

    }

    return (
        <>
            {location.pathname.includes('followers') && !isWatchedUser ?

                <>
                    <section className="remove-follower-modal">
                        <div className="user-img-container" >
                            <img className="profilePreviewImg user-img" onClick={handleOnClickPhoto} src={user.imgUrl} alt="profile-img"></img>
                        </div>
                        <div className="remove-follower-modal-desc">
                            <p className="question">Remove follower?</p>
                            <p className="details">{`instegram won't tell ${user.username} they were removed from your followers`}</p>
                        </div>
                        <div className="remove-follower-modal-btns">
                            <button className="unfollow-n-remove-btn" onClick={handleClickOnRemove}>Remove</button>
                            <button className="cancel-btn" onClick={handleClickOnCancel}>Cancel</button>
                        </div>
                    </section>
                </>
                :
                <>
                    <section className="remove-follower-modal remove-follower-modal-adjustment">
                        <div className="user-img-container">
                            <img className="profilePreviewImg user-img" onClick={handleOnClickPhoto} src={user.imgUrl} alt="profile-img"></img>
                        </div>
                        <div className="remove-follower-modal-desc">
                            <p className="details">{`If you change your mind, you'll have to request to follow ${user.username} again.`}</p>
                        </div>
                        <div className="remove-follower-modal-btns">
                            <button className="unfollow-n-remove-btn" onClick={handleClickOnUnfollow}>Unfollow</button>
                            <button className="cancel-btn" onClick={handleClickOnCancel}>Cancel</button>
                        </div>
                    </section>
                </>

            }
        </>
    )
}

