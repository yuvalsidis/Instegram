

export function PostPreview({ post }) {
    return (
        <>
            <img className="post-preview-img" src={post.imgUrl}></img>
            <div className="post-preview-stats">
                <div className="post-preview-stats-likes">
                    <img className='icon' src="../../public/icons/WhiteLike.svg" alt="WhiteLike Icon" />
                    <div>{post.likedBy.length}</div>
                </div>
                <div className='post-preview-stats-comments'>
                    <img className='icon'  src="../../public/icons/WhiteComment.svg" alt="WhiteComment Icon" />
                     <div>{post.comments.length}</div> 
                </div>
            </div>
        </>
    )
}