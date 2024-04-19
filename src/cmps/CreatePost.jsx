import { CreatePostHeader } from "./CreatePostHeader"
import { CreatePostMain } from "./CreatePostMain"

export function CreatePost(){
   return (
    <div className="create-post create-post-layout-one">
        <CreatePostHeader/>
        <CreatePostMain/>
    </div>
   )   
}