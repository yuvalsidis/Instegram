import { CreatePostHeader } from "./CreatePostHeader"
import { CreatePostMain } from "./CreatePostMain"

export function CreatePost(){
   return (
    <div className="create-post">
        <CreatePostHeader/>
        <CreatePostMain/>
    </div>
   )   
}