import { PostAddComment } from "./PostAddComment"
import { PostHeader } from "./PostHeader"
import { PostDescription } from "./PostDescription"
import { PostPhotos } from "./PostPhotos"
import { PostActions } from "./PostActions"
import { PostComments } from "./PostComments"

export function Post({post}){
    
    return (
        <div className="post">
            <PostHeader post={post}/>
            <PostPhotos/>
            <PostActions/>
            <PostDescription/>
            <PostComments/>
            <PostAddComment/>
        </div>
    )
}