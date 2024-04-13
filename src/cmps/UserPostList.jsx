
import { PostPreview } from "./PostPreview"

export function UserPostList({ posts }) {
    console.log('asdasd',posts)
    return (
        <ul className="user-post-list">
            {
                posts.map(post => (
                    <li key={post._id} className="post-preview">
                        <PostPreview post={post}/>
                    </li>
                ))
            }
        </ul>
    )
}