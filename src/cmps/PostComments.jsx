
import { CommentsList } from "./CommentsList"

export function PostComments({ post }) {

  return (
    <div className="post-comments">
          <CommentsList post={post} />
    </div>
  )
}