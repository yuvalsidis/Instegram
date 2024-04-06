import React, { useState, useEffect } from "react";

export function PostDescription({ post }) {
    const [expanded, setExpanded] = useState(false);
    const [translatedText, setTranslatedText] = useState('');
    const [isTranslatedToHebrew, setIsTranslatedToHebrew] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function translateText() {
            setLoading(true); // Set loading state to true before fetching translation
            try {
                const targetLanguage = isTranslatedToHebrew ? 'iw' : 'en';
                const response = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLanguage}&dt=t&q=${encodeURIComponent(post.txt)}`);
                const data = await response.json();
                const translatedText = data[0][0][0];
                setTranslatedText(translatedText);
            } catch (error) {
                console.error('Translation error:', error);
            } finally {
                setLoading(false); // Set loading state to false after fetching translation
            }
        }

        translateText();
    }, [post.txt, isTranslatedToHebrew]);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    const toggleTranslation = () => {
        setIsTranslatedToHebrew(!isTranslatedToHebrew);
    };

    return (
        <div className="post-description">
            <p>
                <span className="post-description-fullname">{post.by.fullname} </span>
                {loading ? 'Loading...' : (expanded ? translatedText : `${translatedText.slice(0, 100)}${translatedText.length > 100 ? '...' : ''}`)}
                <span> {!expanded && translatedText.length > 100 && (
                    <button className="more-btn" onClick={toggleExpanded}>
                        More
                    </button>
                )}</span>
            </p>
            <button className="translate-btn" onClick={toggleTranslation}>
                {isTranslatedToHebrew ? "See orginal" : "See translation"}
            </button>
        </div>
    );
}