import { PostShare } from "./PostShare"
import { PostDetails } from "./PostDetails"

export function PostActions(){
    return (
        <div className="post-auctions">
            <PostShare/>
            {/* <PostDetails/> opptional with nav link*/}
            {/* Post save, Post Like buttons*/}
        </div>
    )
}