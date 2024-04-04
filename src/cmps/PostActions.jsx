import { PostShare } from "./PostShare"
import { PostDetails } from "./PostDetails"

export function PostActions(){
    return (
        <div className="post-auctions">
            <h1>Hi i am Post auctions</h1>
            <PostShare/>
            {/* <PostDetails/> opptional with nav link*/}
            {/* Post save, Post Like buttons*/}
        </div>
    )
}