import { FollowerList } from "./FollowersList"
import { useNavigate, useParams } from "react-router-dom"
import { removeFollowerModal } from "./RemoveFollowerModal"

export function FollowersContainer({ fullUser, isWatchedUser, loggedInUser}) {
    const navigate = useNavigate()
    
    function handleClickOnExit(){
        isWatchedUser? navigate(`/profile/${fullUser._id}`) : navigate(`/profile`)
    }

    return (
        <div className="followers-container">
            <div className="followers-container-header">
                <div>
                    <p>Followers</p>
                </div>
                <div className="exit-logo-container" onClick={handleClickOnExit}>
                    <img src="/public/icons/ExitBlack.svg" alt="Exit Black Icon" />
                </div>
            </div>
            <div className="filterbar-container">
                <input className="filter-bar-input" type="text" placeholder="Search"></input>
            </div>
            <FollowerList fullUser={fullUser} isWatchedUser={isWatchedUser} loggedInUser={loggedInUser} />
            <removeFollowerModal/>
        </div >
    )
}