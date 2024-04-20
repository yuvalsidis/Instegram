import { CreatePost } from "./CreatePost"
import { useEffect, useState} from "react"

export function CreatePostContainer({setIsCreatePostOpen}){
    const [postStage, setPostStage] = useState(1)

    useEffect(() => {
        document.body.classList.add("no-scroll")
        return () => {
            document.body.classList.remove("no-scroll")
        }
    }, [])


    return (
        <section className="create-post-container">
             <CreatePost setPostStage={setPostStage} postStage={postStage} setIsCreatePostOpen={setIsCreatePostOpen}/>
        </section>
    )
}