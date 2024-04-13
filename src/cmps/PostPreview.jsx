import {useLocation,useNavigate} from "react-router-dom"

export function PostPreview({ post }) {
    const navigate = useNavigate()
    const location = useLocation()

    function handleClickOnImg() {
        if(location.pathname.includes('explore')){
            navigate(`/explore/p/${post._id}`);  
        }
        if(location.pathname.includes('profile')){
            navigate(`/profile/p/:postId${post._id}`);  
        }
    }

    return (
        <>
            <img onClick={handleClickOnImg} className="post-preview-img" src={post.imgUrl}></img>
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