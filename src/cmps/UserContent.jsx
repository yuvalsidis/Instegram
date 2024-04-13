import { UserPostList } from "./UserPostList"

export function UserContent({posts, watchedUser, loggedInUser}) {

    if(!posts) <div>Loading posts</div>
    return (
        <div className="user-content">
            <UserPostList posts={posts} user_id={watchedUser? watchedUser._id : loggedInUser._id}/>            
        </div>
    )
}