import { useState } from "react"
import { utilService } from "../services/util.service";

export function PostDescription({ post }) {
    const [expanded, setExpanded] = useState(false)
    const maxChars = utilService.getRandomIntInclusive(70, 100)

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="post-description">
            <p>
                {expanded ? post.txt : `${post.txt.slice(0, maxChars)}${post.txt.length > maxChars ? '...' : ''}`}
                <span> {!expanded && post.txt.length > maxChars && (
                    <button onClick={toggleExpanded}>
                        More
                    </button>
                )}</span>
            </p>
        </div>
    )
}