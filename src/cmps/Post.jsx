import { PostAddComment } from "./PostAddComment"
import { PostHeader } from "./PostHeader"
import { PostDescription } from "./PostDescription"
import { PostPhotos } from "./PostPhotos"
import { PostActions } from "./PostActions"
import { PostComments } from "./PostComments"
import { PostLikes } from "./PostLikes"

export function Post({ post, onUpdatePost }) {

    return (
        <>
            <PostHeader post={post} />
            <PostPhotos post={post} />
            <PostActions post={post} />
            <PostLikes post={post} />
            <PostDescription post={post} />
            <button className="view-comments-btn">View all {post.comments.length} comments</button>
            <PostAddComment post={post} onUpdatePost={onUpdatePost} />
        </>
    )
}