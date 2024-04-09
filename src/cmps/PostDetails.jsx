import { PostAddComment } from "./PostAddComment"
import { PostHeader } from "./PostHeader"
import { PostDescription } from "./PostDescription"
import { PostPhotos } from "./PostPhotos"
import { PostActions } from "./PostActions"
import { PostComments } from "./PostComments"
import { PostLikes } from "./PostLikes"
import { useLocation } from 'react-router-dom'


export function PostDetails({ post, onUpdatePost, isPostDetailsPage }) {
    const location = useLocation(/p/)


    if (!post) return
    return (
        <div className="post-details">
            <div className="post-details-photo">
                <PostPhotos post={post} />
            </div>
            <div className="post-details-info">
                <PostHeader post={post} isPostDetailsPage={isPostDetailsPage} />
                <div className={location? "post-details-content" : null}>
                    <PostDescription post={post} isPostDetailsPage={isPostDetailsPage}/>
                    <PostComments post={post}/>
                </div>
                <PostActions post={post} onUpdatePost={onUpdatePost} />
                <PostLikes post={post} />
                <PostAddComment post={post} onUpdatePost={onUpdatePost} />
            </div>
        </div>
    )
}