import { PostAddComment } from "./PostAddComment"
import { PostHeader } from "./PostHeader"
import { PostDescription } from "./PostDescription"
import { PostPhotos } from "./PostPhotos"
import { PostActions } from "./PostActions"
import { PostComments } from "./PostComments"
import { PostLikes } from "./PostLikes"

export function PostDetails({ post, onUpdatePost}) {

    if(!post) return
    return (
        <div className="post-details">
            <div className="post-details-photo">
                <PostPhotos post={post} />
            </div>
            <div className="post-details-info">
                <PostHeader post={post} />
                <PostDescription post={post} />
                <PostComments post={post} />
                <PostActions post={post} onUpdatePost={onUpdatePost}/>
                <PostLikes post={post} />
                <PostAddComment post={post} onUpdatePost={onUpdatePost} />
            </div>
        </div>
    )
}