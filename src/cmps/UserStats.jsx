import { useNavigate } from "react-router-dom"
import { utilService } from "../services/util.service"

export function UserStats({ watchedUser, loggedInUser}) {
    const navigate = useNavigate()

    function handleClickOnFollowers(){
        console.log('clicked on followers')
        console.log('asdasdas', watchedUser)
        watchedUser? navigate(`/profile/${watchedUser._id}/followers`) : navigate(`/profile/${loggedInUser._id}/followers`)
    }
    function handleClickOnFollowing(){
        console.log('asdasdas', watchedUser)
        console.log('clicked on following')
        watchedUser? navigate(`/profile/${watchedUser._id}/following`) : navigate(`/profile/${loggedInUser._id}/following`)
    }
    
    return (
        <div className="user-stats">
            {watchedUser ?
                <>
                    <div className="post-stats-container">
                        <p className="post-stat"> <span>{watchedUser.info.posts}</span> posts</p>
                    </div>
                    <div className="post-stats-container" onClick={handleClickOnFollowers}>
                        <p className="followers-stat"><span>{utilService.formatNumber(watchedUser.info.demodatafollowers)}</span> followers</p>
                    </div>
                    <div className="post-stats-container" onClick={handleClickOnFollowing}>
                        <p className="following-stat"><span>{utilService.formatNumber(watchedUser.info.demodataFollowing)}</span> following</p>
                    </div>
                </>
                :
                <>
                    <div className="post-stats-container">
                        <p className="post-stat"><span>{loggedInUser.info.posts}</span> posts</p>
                    </div>
                    <div className="post-stats-container" onClick={handleClickOnFollowers}>
                        <p className="followers-stat" ><span>{utilService.formatNumber(loggedInUser.info.demodatafollowers)}</span> followers</p>
                    </div>
                    <div className="post-stats-container" onClick={handleClickOnFollowing}>
                        <p className="following-stat" ><span>{utilService.formatNumber(loggedInUser.info.demodataFollowing)}</span> following</p>
                    </div>

                </>
            }
        </div>
    )
}