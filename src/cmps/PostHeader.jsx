import { utilService } from "../services/util.service"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export function PostHeader({ post }) {
    const timeSinceCreation = utilService.getTimeSinceCreation(post.createdAt)
    console.log(timeSinceCreation)

    return (
        <div className="post-header">
            <img src={post.by.imgUrl} className="profilePreviewImg"></img>
            <div className="post-header-main">
                <button className="post-header-name">{post.by.fullname}</button>
                <div className="dot">•</div>
                <p className="passed-time">{timeSinceCreation}</p>
                <div className="dot">•</div>
                <button className="follow-btn" >Follow</button>
            </div>
            <MoreHorizIcon style={{ width: '20px', height: '20px' }} />
        </div>
    )
}