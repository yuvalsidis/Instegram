
import { CommentPreview } from "./CommentPreview"

export function PostComments({ post, loggedInUser}) {
                     
  return (
    <div className="post-comments">
      {
        post.comments.map(comment => (
          <div key={`comment-${comment.id}`} className="comment-preview">
               <CommentPreview comment={comment} loggedInUser={loggedInUser} />
          </div>
        ))
      }
    </div>
  )
} 