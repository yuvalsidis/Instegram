import { PostAddComment } from "./PostAddComment"
import { PostHeader } from "./PostHeader"
import { PostDescription } from "./PostDescription"
import { PostPhotos } from "./PostPhotos"
import { PostActions } from "./PostActions"
import { PostComments } from "./PostComments"

export function Post(){
    return (
        <div className="post">
            <h1>Hi i am Post</h1>
            <PostHeader/>
            <PostPhotos/>
            <PostActions/>
            <PostDescription/>
            <PostComments/>
            <PostAddComment/>
        </div>
    )
}