
export function PostLikes({ post, isPostDetailsPage}) {

    function addCommasToNumber(number) {
        // Convert the number to a string with commas
        return number.toLocaleString();
    }

    return (
        <div className={isPostDetailsPage? "page-post-likes" : "post-likes"}>
            <p><span>{ addCommasToNumber(post.demodata.likes)}</span> likes</p>
        </div>
    )
}

