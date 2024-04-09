
import { CommentPreview } from "./CommentPreview"

export function PostComments({ post, isPostDetailsPage}) {

  return (
    <div className="post-comments">
      {
        post.comments.map(comment => (
          <div key={`comment-${comment.id}`} className="comment-preview">
               <CommentPreview comment={comment} />
          </div>
        ))
      }
    </div>
  )
} 