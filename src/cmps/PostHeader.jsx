import { utilService } from "../services/util.service"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useLocation } from 'react-router-dom'

export function PostHeader({ post }) {
    const timeSinceCreation = utilService.getTimeSinceCreation(post.createdAt)
    const location = useLocation(/p/)


    return (
        <div className={location ? "page-post-header" : "post-header"}>
            <img src={post.by.imgUrl} className="profilePreviewImg"></img>
            <div className="post-header-main">
                <button className="post-header-name">{post.by.fullName}</button>
                <div className="dot">•</div>
                {location ? null : <p className="passed-time">{timeSinceCreation}</p>}
                {location ? null : <div className="dot">•</div>}
                <button className="follow-btn" >Follow</button>
            </div>
            <MoreHorizIcon className="more-horiz-icon" style={{ width: '20px', height: '20px' }} />
        </div>
    )
}