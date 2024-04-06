
export function PostLikes({ post }) {
    return (
        <div className="post-likes">
            <p><span>{post.likedBy.length}</span> likes</p>
        </div>
    )
}
