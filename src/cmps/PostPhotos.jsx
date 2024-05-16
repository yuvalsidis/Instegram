
export function PostPhotos({post}){

    return (
        <section className="post-photos">
            <img src={post.imgUrl}></img>
        </section>
    )
}