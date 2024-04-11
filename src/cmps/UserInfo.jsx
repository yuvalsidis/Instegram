
export function UserInfo({ watchedUser, loggedInUser }) {

    return (
        <div className="user-info">
            {watchedUser ?
                <div >
                    <img className="user-info-img profilePreviewImg" src={watchedUser.imgUrl}></img>
                </div>
                :
                <div >
                    <img className="user-info-img profilePreviewImg" src={loggedInUser.imgUrl}></img>
                </div>
            }
        </div>
    )
}