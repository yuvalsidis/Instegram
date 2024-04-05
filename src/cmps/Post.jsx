import { PostAddComment } from "./PostAddComment"
import { PostHeader } from "./PostHeader"
import { PostDescription } from "./PostDescription"
import { PostPhotos } from "./PostPhotos"
import { PostActions } from "./PostActions"
import { PostComments } from "./PostComments"

export function Post({post}){
    
    return (
        <>
            <PostHeader post={post}/>
            <PostPhotos post={post}/>
            <PostActions/>
            <p className="post-likes"><span>{post.likedBy.length}</span> likes</p>
            <PostDescription post={post}/>
            <PostComments/>
            <PostAddComment/>
        </>
    )
}