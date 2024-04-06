export function PostAddComment({ post }) {

    return (
        <dev className="post-add-comment">
            <textarea className="post-add-comment-textarea"
                placeholder="Add a comment"
            >
            </textarea>
            <button className="post-comment-btn">Post</button>
        </dev>
    )
}