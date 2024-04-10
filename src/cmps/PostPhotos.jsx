// import { postService } from "../services/post.service.local"

export function PostPhotos({post}){
    // const randomImage = postService.getRandomImage()

    return (
        <section className="post-photos">
            <img src={post.imgUrl}></img>
        </section>
    )
}