import { PostAddComment } from "./PostAddComment"
import { PostHeader } from "./PostHeader"
import { PostDescription } from "./PostDescription"
import { PostPhotos } from "./PostPhotos"
import { PostActions } from "./PostActions"
import { PostComments } from "./PostComments"
import { PostLikes } from "./PostLikes"
// import { RandomImage } from "./RandomImage"

export function Post({ post, onUpdatePost, loggedInUser, setIsOptionsModalOpen}) {
    function addCommasToNumber(number) {
        // Convert the number to a string with commas
        return number.toLocaleString();
    }

    return (
        <>
            <PostHeader post={post} setIsOptionsModalOpen={setIsOptionsModalOpen}/>
            <PostPhotos post={post} />
            <PostActions post={post} onUpdatePost={onUpdatePost} loggedInUser={loggedInUser}/>
            <PostLikes post={post} />
            <PostDescription post={post} />
            <button className="view-comments-btn">View all {addCommasToNumber(post.demodata.comments)} comments</button>
            <PostAddComment post={post} onUpdatePost={onUpdatePost} loggedInUser={loggedInUser} />
        </>
    )
}