import { utilService } from "../services/util.service"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export function PostHeader({ post, isPostDetailsPage}) {
    const timeSinceCreation = utilService.getTimeSinceCreation(post.createdAt)

    return (
        <div className={isPostDetailsPage ? "page-post-header" : "post-header"}>
            <img src={post.by.imgUrl} className="profilePreviewImg"></img>
            <div className="post-header-main">
                <button className="post-header-name">{post.by.fullName}</button>
                <div className="dot">•</div>
                {isPostDetailsPage ? null : <p className="passed-time">{timeSinceCreation}</p>}
                {isPostDetailsPage ? null : <div className="dot">•</div>}
                <button className="follow-btn" >Follow</button>
            </div>
            <MoreHorizIcon className="more-horiz-icon" style={{ width: '20px', height: '20px' }} />
        </div>
    )
}