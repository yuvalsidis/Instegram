import { CreatePostMainContent } from "./CreatePostMainContent"
import { CreatePostMainFilter } from "./CreatePostMainFilter"

export function CreatePostMain({postStage ,setPostStage}){
    return (
        <div className={`create-post-main ${
            postStage === 1? `create-post-main-layout-one` :
            postStage === 3? `create-post-main-layout-three`: 
              null
              }`}>
               <CreatePostMainContent postStage={postStage} setPostStage={setPostStage}/>
        </div>
    )
}