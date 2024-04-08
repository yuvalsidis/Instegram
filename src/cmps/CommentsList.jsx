import { CommentPreview } from "./CommentPreview"

export function CommentsList({ post }) {
    return (
        <div className="comment-list">
            <CommentPreview  post={post}/>
        </div>
    )
}