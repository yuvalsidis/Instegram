
export function ProfileContentFilter({ watchedUser, loggedInUser }) {

    return (
        <div className="profile-content-filter">
            {watchedUser ?
                <>
                    <div className="posts-filter">
                        <div>
                            <p>POSTS</p>
                        </div>
                    </div>
                </>
                :
                <>
                    <div className="posts-filter">
                        <div>
                            <p>POSTS</p>
                        </div>
                    </div>
                    <div className="posts-save-filter">
                        <div>
                            <p>SAVED</p>
                        </div>
                    </div>
                </>
            }
        </div>

    )
}