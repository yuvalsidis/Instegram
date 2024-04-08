import { PostAddComment } from "./PostAddComment"
import { PostHeader } from "./PostHeader"
import { PostDescription } from "./PostDescription"
import { PostPhotos } from "./PostPhotos"
import { PostActions } from "./PostActions"
import { PostComments } from "./PostComments"
import { PostLikes } from "./PostLikes"

export function PostDetails({ post, onUpdatePost}) {
    console.log('Post', post)
    return (
        <div className="post-details">
            <div>
                <PostPhotos post={post} />
            </div>
            <div>
                <PostHeader post={post} />
                <PostDescription post={post} />
                <PostComments post={post} />
                <PostActions post={post} />
                <PostLikes post={post} />
                <PostAddComment post={post} onUpdatePost={onUpdatePost} />
            </div>
        </div>
    )
}