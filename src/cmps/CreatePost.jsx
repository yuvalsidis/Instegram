import { useState } from "react"
import { postService } from "../services/post.service.local"
import { CreatePostHeader } from "./CreatePostHeader"
import { CreatePostMain } from "./CreatePostMain"


export function CreatePost({ postStage, setPostStage, setIsCreatePostOpen }) {
    const [newPost, setNewPost] = useState(postService.getEmptyPost())
    const [isPostShareClicked, setIsPostShareClick] = useState(null)
     
    if(isPostShareClicked){
        setIsCreatePostOpen(false)
    }
    
    console.log('new Post', newPost)

    return (
        <div className={`create-post ${postStage === 1 ? 'create-post-layout-one' :
            postStage === 3 ? 'create-post-layout-three' :
                postStage === 4 ? 'create-post-layout-four' :
                    null
            }`}>
            <CreatePostHeader postStage={postStage} setPostStage={setPostStage} setNewPost={setNewPost} newPost={newPost} setIsPostShareClick={setIsPostShareClick}/>
            <CreatePostMain postStage={postStage} setPostStage={setPostStage} setNewPost={setNewPost} newPost={newPost}/>
        </div>
    )
}