import { PostShare } from "./PostShare"
import { PostDetails } from "./PostDetails"

export function PostActions({ post }) {

    return (
        <div className="post-actions">
            <div className="post-actions-btns">
                <div>
                    <img className='icon' src="../../public/icons/Like.svg" alt="Like Icon" />
                </div>
                <div>
                    <img className='icon' src="../../public/icons/Comment.svg" alt="Comment Icon" />
                </div>
                <div>
                    <img className='icon' src="../../public/icons/Share.svg" alt="Share Icon" />
                </div>
            </div>
            <div className="post-actions-secondary-btns">
                <img className='icon' src="../../public/icons/Bookmark.svg" alt="Bookmark Icon" />
            </div>
            {/* <PostShare/>  will be the in modal*/}
            {/* <PostDetails/> opptional with nav link*/}
            {/* Post save, Post Like buttons*/}
        </div>
    )
}