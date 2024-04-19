import { CreatePostHeader } from "./CreatePostHeader"
import { CreatePostMain } from "./CreatePostMain"

export function CreatePost({postStage, setPostStage}){


   return (
    <div className={`create-post ${
        postStage === 1 ? 'create-post-layout-one' : 
        postStage === 3 ? 'create-post-layout-three' : 
        postStage === 4 ? 'create-post-layout-four' :
        null
        }`}>
        <CreatePostHeader postStage={postStage} setPostStage={setPostStage}/>
        <CreatePostMain postStage={postStage} setPostStage={setPostStage}/>
    </div>
   )   
}