
import { CommentPreview } from "./CommentPreview"

export function PostComments({ post }) {

  return (
    <div className="post-comments">
          <CommentPreview post={post} />
    </div>
  )
} 