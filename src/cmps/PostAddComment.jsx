import { useState, useEffect } from 'react'
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined'

import { postService } from '../services/post.service.local'
import { utilService } from '../services/util.service'


export function PostAddComment({ post, onUpdatePost, isPostDetailsPage, loggedInUser }) {
    const [comment, setComment] = useState(postService.getEmptyComment())

    const handleChange = (event) => {
        const textarea = event.target
        textarea.style.height = 'auto'
        const newHeight = `${textarea.scrollHeight}px`
        textarea.style.height = newHeight

        // Check if the scroll height decreased
        if (textarea.scrollHeight < textarea.offsetHeight) {
            textarea.style.height = `${textarea.scrollHeight}px`
        }

        setComment({
            ...comment, txt: textarea.value, createdAt: new Date(),
            by: { fullName: (loggedInUser.firstname + ' ' + loggedInUser.lastname), imgUrl: loggedInUser.imgUrl, _id: loggedInUser._id, }
        })
    }

    function handleClickPostBtn() {
        const editedPost = { ...post, comments: [...post.comments, comment] }
        onUpdatePost(editedPost)
        setComment(postService.getEmptyComment())
    }

    return (
        <div className={isPostDetailsPage ? 'page-post-add-comment' : 'post-add-comment'}>
            {isPostDetailsPage ?
                <>
                    <div className='emoji-icon-container'>
                        <SentimentSatisfiedOutlinedIcon className="emoji-icon" />
                    </div>
                    <textarea
                        className='post-add-comment-textarea'
                        value={comment.txt}
                        onChange={handleChange}
                        placeholder='Add a comment...'
                    />
                    <button className={comment.txt ? 'post-comment-btn' : 'post-comment-btn-after'} onClick={() => handleClickPostBtn()}>Post</button>
                </>
                :
                <>
                    <textarea
                        className="post-add-comment-textarea"
                        value={comment.txt}
                        onChange={handleChange}
                        placeholder="Add a comment..."
                    />
                    {comment.txt && <button className="post-comment-btn" onClick={() => handleClickPostBtn()}>Post</button>}
                    <SentimentSatisfiedOutlinedIcon className="emoji-icon" />
                </>

            }
        </div>
    );

}