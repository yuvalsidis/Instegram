
import {useParams} from "react-router-dom"
import { PostDetails } from "../cmps/PostDetails"

export function PostDetailsPage(){
    console.log('arrived to destination post details!')
    const {postId} = useParams()
    console.log('post id is :', postId)

    return(
        <section className="post-details-page">
            <h1>Post Details Page</h1>
            <PostDetails/>
        </section>
    )
}