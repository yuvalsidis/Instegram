

export function PostPreview({ post }) {
    return (
        <>
            <img src={post.imgUrl}></img>
            <div className="post-preview-stats">
                <div>
                    <img className='icon' src="../../public/icons/WhiteLike.svg" alt="WhiteLike Icon" />
                </div>
                <div>
                    <img className='icon' src="../../public/icons/WhiteComment.svg" alt="WhiteComment Icon" />
                </div>
            </div>
        </>
    )
}