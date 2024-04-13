import { UserPostList } from "./UserPostList"

export function UserContent({posts}) {

    if(!posts) <div>Loading posts</div>
    return (
        <div className="user-content">
            <UserPostList posts={posts}/>            
        </div>
    )
}