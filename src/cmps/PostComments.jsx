import { useLocation } from "react-router-dom"


export function PostComments({ post }) {
  const location = useLocation()
  const isPostDetailsPage = location.pathname.includes('/p/')

  console.log('location /p/??',isPostDetailsPage)

  return (
    <div className="post-comments">
      <button className="view-comments-btn">View all {post.comments.length} comments</button>
    </div>
  )
}