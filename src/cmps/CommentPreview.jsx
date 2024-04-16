import { useState, useEffect } from "react";
import { utilService } from "../services/util.service";
import { useNavigate, useParams } from "react-router-dom"

export function CommentPreview({ comment, loggedInUser }) {
    const [translatedText, setTranslatedText] = useState('');
    const [isTranslatedToHebrew, setIsTranslatedToHebrew] = useState(false);
    const timeSinceCreation = utilService.getTimeSinceCreation(comment.createdAt)
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    function handleOnNav() {
           comment.by._id === loggedInUser._id?  navigate(`/profile`) : navigate(`/profile/${comment.by._id}`)
    }
  
      
    useEffect(() => {
        async function translateText() {
            setLoading(true); // Set loading state to true before fetching translation
            try {
                const targetLanguage = isTranslatedToHebrew ? 'iw' : 'en';
                const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLanguage}&dt=t&q=${encodeURIComponent(comment.txt)}`);
                const data = await response.json();
                const translatedText = data[0][0][0];
                setTranslatedText(translatedText);
            } catch (error) {
                console.error('Translation error:', error);
            } finally {
                setLoading(false);
            }
        }

        translateText();
    }, [comment.txt, isTranslatedToHebrew]);


    const toggleTranslation = () => {
        setIsTranslatedToHebrew(!isTranslatedToHebrew);
    };


    return (
        <>
            <div>
                <img src={comment.by.imgUrl} className="profilePreviewImg" onClick={handleOnNav}></img>
            </div>
            <div>
                <p>
                    <span className="post-comment-fullname" onClick={handleOnNav}>{comment.by.fullName} </span>
                    {loading ? 'Loading...' : translatedText}
                </p>
                <div className="post-comment-under-details">
                    <p className="passed-time post-details-passed-time">{timeSinceCreation}</p>
                    {(comment.likedBy.length > 0 && comment.likedBy.length < 10) ? <p className="comment-likes">{comment.likedBy.length} like</p> : null}
                    {(comment.likedBy.length > 10) ? <p className="comment-likes" >{comment.likedBy.length} likes</p> : null}
                    <button className="translate-btn" onClick={toggleTranslation}>
                        {isTranslatedToHebrew ? "See orginal" : "See translation"}
                    </button>
                </div>
            </div>
            <div className="comment-like-container">
                <img className="comment-like-icon" src="/public/icons/Like.svg" alt="Like Icon" />
            </div>
        </>
    )
}
