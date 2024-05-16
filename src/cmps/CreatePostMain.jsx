import { useState } from "react";
import { CreatePostMainContent } from "./CreatePostMainContent"
import { CreatePostMainFilter } from "./CreatePostMainFilter"
import { CreatePostNewPost } from "./CreatePostNewPost"


export function CreatePostMain({ postStage, setPostStage, setNewPost, newPost, setFileInputChange }) {
    const [filterStyles, setFilterStyles] = useState({});
    const [imageUrl, setImageUrl] = useState(null)

    return (
        <div className={`create-post-main ${postStage === 1 ? `create-post-main-layout-one` :
            postStage === 3 ? `create-post-main-layout-three` :
                postStage === 4 ? `create-post-main-layout-four` :
                    null
            }`}>
            <CreatePostMainContent
                postStage={postStage}
                setPostStage={setPostStage}
                filterStyles={filterStyles}
                setImageUrl={setImageUrl}
                imageUrl={imageUrl}
                setFileInputChange={setFileInputChange}
            />
            {postStage === 3 && <CreatePostMainFilter setFilterStyles={setFilterStyles} />}
            {postStage === 4 && <CreatePostNewPost setNewPost={setNewPost} newPost={newPost} />}
        </div>
    )
}