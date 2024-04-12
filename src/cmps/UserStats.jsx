
export function UserStats({ watchedUser, loggedInUser }) {
    return (
        <div className="user-stats">
            {watchedUser ?
                <>
                    <div className="post-stats-container">
                        <p className="post-stat"> <span>{watchedUser.info.posts}</span> posts</p>
                    </div>
                    <div className="post-stats-container">
                        <p className="followers-stat"><span>{watchedUser.info.followers.length}</span> followers</p>
                    </div>
                    <div className="post-stats-container">
                        <p className="following-stat"><span>{watchedUser.info.following.length}</span> following</p>
                    </div>
                </>
                :
                <>
                    <div className="post-stats-container">
                        <p className="post-stat"><span>{loggedInUser.info.posts}</span> posts</p>
                    </div>
                    <div className="post-stats-container">
                        <p className="followers-stat"><span>{loggedInUser.info.followers.length}</span> followers</p>
                    </div>
                    <div className="post-stats-container">
                        <p className="following-stat"><span>{loggedInUser.info.following.length}</span> following</p>
                    </div>

                </>
            }
        </div>
    )
}