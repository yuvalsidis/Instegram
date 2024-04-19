import { useState } from "react";
import { CreatePostMainContent } from "./CreatePostMainContent"
import { CreatePostMainFilter } from "./CreatePostMainFilter"
import { CreatePostNewPost } from "./CreatePostNewPost";


export function CreatePostMain({postStage ,setPostStage}){
    const [filterStyles, setFilterStyles] = useState({});

    return (
        <div className={`create-post-main ${
            postStage === 1? `create-post-main-layout-one` :
            postStage === 3? `create-post-main-layout-three`: 
              null
              }`}>
               <CreatePostMainContent postStage={postStage} setPostStage={setPostStage} filterStyles={filterStyles}/>
               {postStage === 3 && <CreatePostMainFilter  setFilterStyles={ setFilterStyles}/>}
               {postStage === 4 && <CreatePostNewPost/>}
        </div>
    )
}