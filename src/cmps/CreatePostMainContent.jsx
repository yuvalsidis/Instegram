
export function CreatePostMainContent() {
    return (
        <div className="create-post-main-content">
            <div>
                <img className="create-post-icon" src="/public/icons/CreatePost.svg" alt="Create Post Icon" />
            </div>
            <div className="drag-photos-p">
                <p>Drag photos and videos here</p>
            </div>
            <div>
                <button className="select-from-computer-btn">Select from computer</button>
            </div>
        </div>
    )
}