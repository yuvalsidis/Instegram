import { UserAction } from "./UserActions"
export function UserInfo({ watchedUser, loggedInUser }) {

    return (
        <div className="user-info">
            {watchedUser ?
                <>
                    <div className="img-container">
                        <img className="user-info-img profilePreviewImg" src={watchedUser.imgUrl}></img>
                    </div>
                    <div className="user-details">
                        <UserAction  watchedUser={ watchedUser} loggedInUser={loggedInUser} />
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
                        <UserAction loggedInUser={loggedInUser} watchedUser={watchedUser}/>
                        <div className="user-stats">

                        </div>
                    </div>
                </>
            }
        </div>
    )
}