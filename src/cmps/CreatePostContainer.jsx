import { CreatePost } from "./CreatePost"

export function CreatePostContainer(){

    useEffect(() => {
        document.body.classList.add("no-scroll")
        return () => {
            document.body.classList.remove("no-scroll")
        }
    }, [])

    
    return (
        <section className="create-post-container">
             <CreatePost/>
        </section>
    )
}