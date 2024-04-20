
import { PostPreview } from "./PostPreview"

export function UserPostList({ posts, user_id }) {

    return (
        <ul className="user-post-list"> 
            {
                posts.reverse().map(post => (
                    <li key={post._id} className="post-preview">
                        <PostPreview post={post} user_id={user_id}/>
                    </li>
                ))
            }
        </ul>
    )
}