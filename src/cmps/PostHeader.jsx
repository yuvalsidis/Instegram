import { utilService } from "../services/util.service"
import { useNavigate } from "react-router-dom"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useState } from "react";

export function PostHeader({ post, isPostDetailsPage, isPostIdProfile}) {
    
    const navigate = useNavigate()
    const timeSinceCreation = utilService.getTimeSinceCreation(post.createdAt)

    function handleClickPostHeaderName() {
        navigate(`/profile/${post.by._id}`)
    }

    return (
        <div className={isPostDetailsPage ? "page-post-header" : "post-header"}>
            <div>
                <img src={post.by.imgUrl} className="profilePreviewImg"></img>
            </div>
            <div className="post-header-main">
                <button className="post-header-name" onClick={handleClickPostHeaderName}>{post.by.fullName}</button>
                {isPostIdProfile ? "" : <div className="dot">•</div>}
                {isPostDetailsPage ? null : <p className="passed-time">{timeSinceCreation}</p>}
                {isPostDetailsPage ? null : <div className="dot">•</div>}
                {isPostIdProfile ? "" : <button className="follow-btn" >Follow</button>}
            </div>
            <MoreHorizIcon className="more-horiz-icon" style={{ width: '20px', height: '20px' }} />
        </div>
    )
}