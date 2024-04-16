import { useLocation } from 'react-router-dom'

export function RemoveFollowerModal({ isWatchedUser, user, userId, setIsRemoveFollowerModalOpen}) {

    function handleClickOnCancel(){
        if(locationPathname.includes('followers')){
            setIsRemoveFollowerModalOpen(false)
        }
        else{
            setIsRemoveFollowerModalOpen(false)
        }
    }
    return (
        <>
            {isWatchedUser ?
                <>
                    <section className="remove-follower-modal remove-follower-modal-adjustment">
                        <div className="user-img-container">
                            <img className="profilePreviewImg user-img" src={user.imgUrl} alt="profile-img"></img>
                        </div>
                        <div className="remove-follower-modal-desc">
                            <p className="details">{`If you change your mind, you'll have to request to follow ${user.username} again.`}</p>
                        </div>
                        <div className="remove-follower-modal-btns">
                            <button className="unfollow-n-remove-btn">Unfollow</button>
                            <button className="cancel-btn" onClick={handleClickOnCancel}>Cancel</button>
                        </div>
                    </section>
                </>
                :
                <>
                    <section className="remove-follower-modal">
                        <div className="user-img-container">
                            <img className="profilePreviewImg user-img" src={user.imgUrl} alt="profile-img"></img>
                        </div>
                        <div className="remove-follower-modal-desc">
                            <p className="question">Remove follower?</p>
                            <p className="details">{`instegram won't tell ${user.username} they were removed from your followers`}</p>
                        </div>
                        <div className="remove-follower-modal-btns">
                            <button className="unfollow-n-remove-btn">Remove</button>
                            <button className="cancel-btn" onClick={handleClickOnCancel}>Cancel</button>
                        </div>
                    </section>
                </>

            }
        </>
    )
}