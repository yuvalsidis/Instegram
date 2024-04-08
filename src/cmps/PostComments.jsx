import { useLocation } from "react-router-dom"
import { CommentPreview } from "./CommentPreview"

export function PostComments({ post }) {
  const location = useLocation()
  const isPostDetailsPage = location.pathname.includes('/p/')

  return (
    <div className="post-comments">
      {isPostDetailsPage ?
        (
          <CommentPreview />
      ) :
        (
          <button className="view-comments-btn">View all {post.comments.length} comments</button>
        )}
    </div>
  )
}