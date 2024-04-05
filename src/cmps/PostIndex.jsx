import { PostList } from "./PostList"
import { postService } from "../services/post.service.local"

export function PostIndex(){
   
    return (
        <div className="post-index">
             <h1>Hi i am the post index</h1>
             <PostList/>    
        </div>
    )
}