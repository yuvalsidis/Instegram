import {useLocation,useNavigate} from "react-router-dom"

export function PostPreview({ post, user_id}) {

    const navigate = useNavigate()
    const location = useLocation()

    function handleClickOnImg() {
        if(location.pathname.includes('explore')){
            navigate(`/explore/p/${post._id}`);  
        }
        if(location.pathname.includes('profile')){
            navigate(`/profile/${user_id}/p/${post._id}`);  
        }
    }

    function formatNumber(num) {
        if (num < 10000) {
            return num.toLocaleString(); 
        } else if (num < 1000000) {
            return (num / 1000).toFixed(1) + 'K'; 
        } else {
            return (num / 1000000).toFixed(1) + 'M'; 
        }
    }

    return (
        <>
            <img onClick={handleClickOnImg} className="post-preview-img" src={post.imgUrl}></img>
            <div className="post-preview-stats">
                <div className="post-preview-stats-likes">
                    <img className='white-like icon' src="/public/icons/WhiteLike.svg" alt="WhiteLike Icon" />
                    <div>{formatNumber(post.demodata.likes)}</div>
                </div>
                <div className='post-preview-stats-comments'>
                    <img className='white-comment icon'  src="/public/icons/WhiteComment.svg" alt="WhiteComment Icon" />
                     <div>{formatNumber(post.demodata.comments)}</div> 
                </div>
            </div>
        </>
    )
}