import {useLocation,useNavigate} from "react-router-dom"
import { utilService } from "../services/util.service"

export function PostPreview({ post, user_id}) {

    const navigate = useNavigate()
    const location = useLocation()

    function handleClickOnImg() {
        if(location.pathname.includes('explore')){
            navigate(`/explore/p/${post._id}`)
        }
        if(location.pathname.includes('profile')){
            navigate(`/profile/${user_id}/p/${post._id}`)
        }
    }

    return (
        <>
            <img onClick={handleClickOnImg} className="post-preview-img" src={post.imgUrl}></img>
            <div className="post-preview-stats">
                <div className="post-preview-stats-likes">
                    <img className='white-like icon' src="/public/icons/WhiteLike.svg" alt="WhiteLike Icon" />
                    <div>{utilService.formatNumber(post.demodata.likes)}</div>
                </div>
                <div className='post-preview-stats-comments'>
                    <img className='white-comment icon'  src="/public/icons/WhiteComment.svg" alt="WhiteComment Icon" />
                     <div>{utilService.formatNumber(post.demodata.comments)}</div> 
                </div>
            </div>
        </>
    )
}