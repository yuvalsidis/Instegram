

export function PostComments({post}){

    return (
        <div className="post-comments">
          <button className="view-comments-btn">View all {post.comments.length} comments</button>
        </div>
    )
}