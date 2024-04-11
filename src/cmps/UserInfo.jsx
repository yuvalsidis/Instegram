
export function UserInfo({ watchedUser, loggedInUser }) {

    return (
        <div className="user-info">
            {watchedUser ?
                <>
                    <div className="img-container">
                        <img className="user-info-img profilePreviewImg" src={watchedUser.imgUrl}></img>
                    </div>
                    <div className="user-details">
                        <div className="user-actions">
                            <p>{watchedUser.username}</p>
                            <a></a>
                        </div>
                        <div className="user-stats">

                        </div>
                    </div>
                </>
                :
                <>
                    <div >
                        <img className="user-info-img profilePreviewImg" src={loggedInUser.imgUrl}></img>
                    </div>
                    <div className="user-details">
                        <div className="user-actions">
                            <p>{loggedInUser.username}</p>
                        </div>
                        <div className="user-stats">

                        </div>
                    </div>
                </>
            }
        </div>
    )
}