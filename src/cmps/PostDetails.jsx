import { PostAddComment } from "./PostAddComment"
import { PostHeader } from "./PostHeader"
import { PostDescription } from "./PostDescription"
import { PostPhotos } from "./PostPhotos"
import { PostActions } from "./PostActions"
import { PostComments } from "./PostComments"
import { PostLikes } from "./PostLikes"
import { useLocation } from 'react-router-dom'
import { utilService } from "../services/util.service"

export function PostDetails({ post, onUpdatePost, isPostDetailsPage }) {
    const location = useLocation(/p/)
    const timeSinceCreation = utilService.getTimeSinceCreation(post.createdAt)

    if (!post) return
    return (
        <div className="post-details">
            <div className="post-details-photo">
                <PostPhotos post={post} />
            </div>
            <div className="post-details-info">
                <PostHeader post={post} isPostDetailsPage={isPostDetailsPage} />
                <div className={isPostDetailsPage ? "post-details-content" : null}>
                    <PostDescription post={post} isPostDetailsPage={isPostDetailsPage} />
                    <PostComments post={post} />
                </div>
                <PostActions post={post} onUpdatePost={onUpdatePost} isPostDetailsPage={isPostDetailsPage} />
                <PostLikes post={post} isPostDetailsPage={isPostDetailsPage} />
                {isPostDetailsPage ? <p className="post-details-passed-time">{timeSinceCreation} ago</p> : null}
                <PostAddComment post={post} onUpdatePost={onUpdatePost} isPostDetailsPage={isPostDetailsPage} />
            </div>
        </div>
    )
}