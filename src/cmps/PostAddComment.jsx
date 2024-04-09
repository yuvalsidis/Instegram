import { useState, useEffect } from 'react';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';

import { postService } from '../services/post.service.local';
import { utilService } from '../services/util.service';

export function PostAddComment({ post, onUpdatePost, isPostDetailsPage }) {
    const [text, setText] = useState('');
    const [comment, setComment] = useState(postService.getEmptyComment())
    const [editedPost, setEditedPost] = useState(post)

    useEffect(() => {
        if (comment.txt) {
            setEditedPost(prevEditedPost => ({ ...prevEditedPost, comments: [...prevEditedPost.comments, comment] }))
        }
    }, [comment])

    useEffect(() => {
        onUpdatePost(editedPost)
    }, [editedPost])

    const handleChange = (event) => {
        const textarea = event.target
        textarea.style.height = 'auto'
        const newHeight = `${textarea.scrollHeight}px`
        textarea.style.height = newHeight

        // Check if the scroll height decreased
        if (textarea.scrollHeight < textarea.offsetHeight) {
            textarea.style.height = `${textarea.scrollHeight}px`;
        }

        setText(textarea.value)
    }

    function handleClickPostBtn() {

        setComment({ ...comment, txt: text, createdAt: utilService.getTimeSinceCreation(new Date()) })
        setText('')
    }

    return (
        <div className={isPostDetailsPage ? "page-post-add-comment" : "post-add-comment"}>
            {isPostDetailsPage ?
                <>
                    <div className='emoji-icon-container'>
                        <SentimentSatisfiedOutlinedIcon className="emoji-icon" />
                    </div>
                    <textarea
                        className="post-add-comment-textarea"
                        value={text}
                        onChange={handleChange}
                        placeholder="Add a comment..."
                    />
                    <button className={text ? "post-comment-btn" : "post-comment-btn-after"} onClick={() => handleClickPostBtn()}>Post</button>
                </>
                :
                <>
                    <textarea
                        className="post-add-comment-textarea"
                        value={text}
                        onChange={handleChange}
                        placeholder="Add a comment..."
                    />
                    {text && <button className="post-comment-btn" onClick={() => handleClickPostBtn()}>Post</button>}
                    <SentimentSatisfiedOutlinedIcon className="emoji-icon" />
                </>

            }
        </div>
    );
}