import { ExplorePostList } from "../cmps/ExplorePostList"
import { useSelector } from "react-redux"

export function ExplorePage(){
    const posts = useSelector(storeState => storeState.postModule.posts)

    return (
        <section className="explore-page">
            <ExplorePostList posts={posts}/>
        </section>
    )
}