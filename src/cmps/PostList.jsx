import { Post } from "./Post"

export function PostList({ posts, onUpdatePost, loggedInUser ,setIsOptionsModalOpen}) {
    return (
        <ul className="post-list">
            {posts.map(post => (
                <li className="post" key={post._id} id={post.id}>
                    <Post post={post} onUpdatePost={onUpdatePost} loggedInUser={loggedInUser} setIsOptionsModalOpen={setIsOptionsModalOpen}/>
                </li>

            ))}
        </ul>
    )
}