import { PostPreview } from "./PostPreview"

export function ExplorePostList({posts}){
    console.log('asd', posts)
    
    return (
        <div className="explore-post-list">
            <h1>Hi i am explore post list</h1>
            <PostPreview/>
        </div>
    )
}