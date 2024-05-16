
export function PostLikes({ post, isPostDetailsPage}) {

    function addCommas(number) {
        number = Math.trunc(number)
        return number.toLocaleString()
    }
    
    return (
        <div className={isPostDetailsPage? "page-post-likes" : "post-likes"}>
            <p><span>{  addCommas(post.demodata.likes)}</span> likes</p>
        </div>
    )
}

