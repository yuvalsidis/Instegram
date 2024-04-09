
export function PostLikes({ post, isPostDetailsPage}) {
    return (
        <div className={isPostDetailsPage? "page-post-likes" : "post-likes"}>
            <p><span>{post.likedBy.length}</span> likes</p>
        </div>
    )
}
