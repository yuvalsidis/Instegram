

export function PostPreview({ post }) {
    return (
        <>
            <img src={post.imgUrl}></img>
            <div className="post-preview-stats">
                <div className="post-preview-stats-likes">
                    <img className='icon' src="../../public/icons/WhiteLike.svg" alt="WhiteLike Icon" />
                    <p>{post.likedBy.length}</p>
                </div>
                <div>
                    <img className='post-preview-stats-comments' src="../../public/icons/WhiteComment.svg" alt="WhiteComment Icon" />
                    <p>{post.comments.length}</p>
                </div>
            </div>
        </>
    )
}