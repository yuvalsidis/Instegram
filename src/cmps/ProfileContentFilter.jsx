
export function ProfileContentFilter({ watchedUser, loggedInUser }) {

    return (
        <div className="profile-content-filter">
            {watchedUser ?
                <>
                    <div className="posts-filter">
                        <div>
                            <button>POSTS</button>
                        </div>
                    </div>
                </>
                :
                <>
                    <div className="posts-filter">
                        <div>
                            <button>POSTS</button>
                        </div>
                    </div>
                    <div className="posts-save-filter">
                        <div>
                            <button>SAVED</button>
                        </div>
                    </div>
                </>
            }
        </div>

    )
}