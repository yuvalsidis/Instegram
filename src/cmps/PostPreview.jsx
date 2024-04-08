import {useLocation,useNavigate} from "react-router-dom"

export function PostPreview({ post }) {
    const navigate = useNavigate()

    function handleClickOnComment() {
        navigate(`/explore/p/${post._id}`);  
    }

    return (
        <>
            <img onClick={handleClickOnComment} className="post-preview-img" src={post.imgUrl}></img>
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