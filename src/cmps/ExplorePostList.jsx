import { PostPreview } from "./PostPreview"

export function ExplorePostList({ posts }) {

    return (
        <ul className="explore-post-list">
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