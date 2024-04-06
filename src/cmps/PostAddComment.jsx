import { useState } from 'react';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';

export function PostAddComment({ post }) {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        const textarea = event.target;
        textarea.style.height = 'auto'; // Reset height to auto
        const newHeight = `${textarea.scrollHeight}px`;
        textarea.style.height = newHeight;

        // Check if the scroll height decreased
        if (textarea.scrollHeight < textarea.offsetHeight) {
            textarea.style.height = `${textarea.scrollHeight}px`;
        }

        setText(textarea.value);
    };

    return (
        <div className="post-add-comment">
            <textarea
                className="post-add-comment-textarea"
                value={text}
                onChange={handleChange}
                placeholder="Add a comment..."
            />
            <button className="post-comment-btn">Post</button>
            <SentimentSatisfiedOutlinedIcon className="emoji-icon" />
        </div>
    );
}